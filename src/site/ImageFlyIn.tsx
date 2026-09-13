"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { REDUCED_MOTION } from "./tokens";

gsap.registerPlugin(useGSAP);

/**
 * A field of imagery flying out of the page toward the viewer.
 *
 * Cards start far away and small, travel forward on Z, and fade out as they
 * pass the camera. A zone in the middle is kept clear so whatever the section
 * actually says stays readable, and the whole field drifts with the pointer.
 *
 * ── Why the maths works in projected space, not local space ────────────────
 *
 * The obvious implementation gives each card a fixed x/y and animates only z,
 * and it looks wrong: CSS perspective magnifies x and y by the same factor it
 * magnifies the card, so at the far plane every card is squeezed into a knot at
 * the centre — exactly where the headline is. The hole only opens at the very
 * end of the flight.
 *
 * So the schedule is written in *screen* terms instead. Each frame decides how
 * far from the centre the card should appear, in pixels, then divides by the
 * perspective scale to get the local translate that lands it there. The clear
 * centre is then a property of the schedule and holds at every depth.
 *
 * ── One ticker, not twelve tweens ──────────────────────────────────────────
 *
 * Every card is written by `gsap.quickSetter(el, "css")` from inside a single
 * `gsap.ticker` callback. Twelve independent tweens would each take their own
 * render pass; this takes one write per card per frame and no timeline
 * bookkeeping at all. The callback is removed on cleanup — a ticker callback is
 * not owned by the useGSAP context and will happily go on writing to detached
 * nodes after an unmount if nobody takes it off.
 *
 * ── Reduced motion ─────────────────────────────────────────────────────────
 *
 * The field is composed and parked, not hidden. Cards are laid out at the
 * depths they would occupy at one instant of the loop, which is a picture the
 * animation genuinely passes through rather than a degraded version of one.
 */

export type FlyInImage = {
  src: string;
  /** Width ÷ height. Drives the card's shape; the image itself is cropped. */
  aspect?: number;
};

/**
 * The campus photographs already in `public/showcase`, which the template
 * gallery also draws on. Same argument as there: somebody sizing up a builder
 * for an institution is looking for institutions, and a field of stock
 * gradients answers a question nobody asked.
 */
const SHOWCASE_IMAGES: FlyInImage[] = [
  { src: "/showcase/oxford.jpg", aspect: 16 / 10 },
  { src: "/showcase/penn.jpg", aspect: 4 / 3 },
  { src: "/showcase/uchicago.jpg", aspect: 16 / 10 },
  { src: "/showcase/kent.jpg", aspect: 3 / 2 },
  { src: "/showcase/ucdavis.jpg", aspect: 16 / 10 },
  { src: "/showcase/georgetown.jpg", aspect: 4 / 3 },
  { src: "/showcase/cranfield.jpg", aspect: 3 / 2 },
  { src: "/showcase/uwa.jpg", aspect: 16 / 10 },
  { src: "/showcase/birmingham.jpg", aspect: 4 / 3 },
  { src: "/showcase/queens.jpg", aspect: 16 / 10 },
  { src: "/showcase/queens-belfast.jpg", aspect: 3 / 2 },
];

export type ImageFlyInProps = {
  /** The imagery to fly. Cycles if there are fewer images than cards. */
  images?: FlyInImage[];
  /** How many cards are in flight at once. */
  count?: number;
  /** Seconds for one card to cross from the far plane to the camera. */
  duration?: number;
  /** How far back the far plane sits, in pixels. */
  depth?: number;
  /** Multiplier on the whole flight. 1 is the authored pace. */
  speed?: number;
  /** How much scrolling pushes the field forward. 0 disables the listener. */
  scrollBoost?: number;
  /** Pixels of pointer drift at the near plane. 0 disables the listener. */
  pan?: number;
  /**
   * Half-width and half-height, in pixels, of the clear zone in the middle —
   * the box the content occupies. It is an ellipse rather than a circle, and
   * it is in pixels rather than a share of the field, because the content it
   * protects is a fixed measure: a headline capped at 24ch does not halve when
   * the viewport does, so a hole defined as a fraction of the field walks
   * straight through the text on a laptop.
   *
   * Each is capped at the field's own half-dimension. On a phone the cap does
   * the sensible thing by itself: cards on horizontal angles slide off the
   * sides almost at once, and what is left is a band of imagery above and
   * below the text.
   */
  holeX?: number;
  holeY?: number;
  /** Card width in pixels at the screen plane, before perspective scaling. */
  cardWidth?: number;
  /** The most opaque a card ever gets. */
  maxOpacity?: number;
  /**
   * A wash drawn over the field and under the content, so text in the clear
   * centre keeps its contrast whatever flies behind it. `null` removes it.
   */
  scrim?: string | null;
  className?: string;
};

/** The CSS perspective the field is viewed through. */
const PERSPECTIVE = 1000;

/**
 * How close a card may get, as a share of the perspective distance. At z equal
 * to the perspective the projection divides by zero and the card fills the
 * universe; 0.55 tops the magnification out a little above 2×.
 */
const NEAR_LIMIT = 0.55;

/** Deterministic PRNG, so the field's layout is the same on every mount. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Smoothstep, for fades that do not start and stop with a corner. */
function smooth(t: number) {
  const c = t < 0 ? 0 : t > 1 ? 1 : t;
  return c * c * (3 - 2 * c);
}

/**
 * Opacity across one flight: up out of the haze, held, then gone before the
 * card is close enough for its own pixels to be visible as pixels.
 */
function envelope(p: number) {
  if (p < 0.18) return smooth(p / 0.18);
  if (p > 0.66) return smooth((1 - p) / 0.34);
  return 1;
}

/** Everything about one card that the ticker needs. */
type Card = {
  el: HTMLDivElement | null;
  set: ((vars: Record<string, number>) => void) | null;
  /** Where it sits on the circle, in radians. */
  angle: number;
  /** |cos| and |sin| of that angle, precomputed — they never change. */
  ax: number;
  ay: number;
  /** Multiplier on the outer radius, so the field is not a ring. */
  spread: number;
  /** Progress through its flight, 0–1. Advanced every frame. */
  p: number;
  /** Its size at the screen plane, in pixels, before perspective scaling. */
  w: number;
  h: number;
};

export function ImageFlyIn({
  images = SHOWCASE_IMAGES,
  count = 12,
  duration = 9,
  depth = 2200,
  speed = 1,
  scrollBoost = 0.55,
  pan = 46,
  holeX = 340,
  holeY = 200,
  cardWidth = 250,
  maxOpacity = 0.42,
  scrim = "radial-gradient(58% 62% at 50% 50%, rgba(8,13,24,0.52) 0%, rgba(8,13,24,0.34) 46%, rgba(8,13,24,0) 78%)",
  className = "",
}: ImageFlyInProps) {
  const field = useRef<HTMLDivElement>(null);
  const cards = useRef<Card[]>([]);

  useGSAP(
    () => {
      const node = field.current;
      if (!node) return;

      const list = cards.current.filter((c) => c && c.el);
      if (!list.length) return;

      for (const card of list) {
        // Rotation is set once and left in GSAP's transform cache. The
        // per-frame write below touches x/y/z/opacity only, and the cache
        // carries the rotation through untouched.
        gsap.set(card.el, {
          xPercent: -50,
          yPercent: -50,
          rotation: (card.angle * 180) / Math.PI / 14 - 6,
          force3D: true,
        });
        card.set = gsap.quickSetter(card.el as HTMLDivElement, "css") as Card["set"];
      }

      // The field's own size, kept off the frame path. Reading offsetWidth in
      // the ticker would force layout on every frame of every scroll.
      let hx = 0;
      let hy = 0;
      let ox = 0;
      let oy = 0;
      const measure = () => {
        const halfW = node.offsetWidth / 2;
        const halfH = node.offsetHeight / 2;
        hx = Math.min(halfW, holeX);
        hy = Math.min(halfH, holeY);
        // Far enough past the frame that a card is gone before it stops.
        ox = halfW * 1.45;
        oy = halfH * 1.45;
      };

      /**
       * How far the centre is from a rectangle of half-size (rx, ry) along a
       * heading, given |cos| and |sin| of that heading.
       *
       * The first draft treated the clear zone as an ellipse through the
       * corners of the content box, which is wrong in the way inscribed
       * ellipses are always wrong: at 45° the boundary is a factor of √2 inside
       * the rectangle, so cards on the diagonals sat squarely on the headline
       * while the maths reported them as clear. A rectangle is what the content
       * is, so a rectangle is what gets measured.
       */
      const edgeOf = (rx: number, ry: number, ax: number, ay: number) =>
        Math.min(ax > 1e-4 ? rx / ax : Infinity, ay > 1e-4 ? ry / ay : Infinity);

      /** Place one card on screen for a given progress. */
      const place = (card: Card, p: number, panX: number, panY: number) => {
        const z = -depth + p * (depth + PERSPECTIVE * NEAR_LIMIT);
        const scale = PERSPECTIVE / (PERSPECTIVE - z);

        // The card's own apparent size, as a circumradius so the clearance
        // holds whichever way the card is rotated. Adding it means the card's
        // *edge* rides the hole rather than its centre — without it a card is
        // clear of the text in the distance and ploughs through it on the way
        // past, because by then it is seven times the size it started at.
        const clearance = Math.hypot(card.w * scale, card.h * scale) / 2;

        // Out from the edge of the content box to the edge of the frame, along
        // this card's own heading — so every card leaves at the border rather
        // than a card on a short section's vertical axis exiting in the first
        // fifth of its flight. The exponent holds cards in the distance longer
        // than a linear ramp would, which is what makes the last third read as
        // acceleration rather than as drift.
        const from = edgeOf(hx, hy, card.ax, card.ay) + clearance;
        const to = Math.max(edgeOf(ox, oy, card.ax, card.ay) * card.spread, from * 1.25);
        const r = from + (to - from) * Math.pow(p, 1.75);

        // Nearer cards take more of the pointer drift than distant ones, which
        // is the whole of the parallax.
        const drift = 0.3 + 0.7 * p;

        card.set?.({
          x: (Math.cos(card.angle) * r + panX * drift) / scale,
          y: (Math.sin(card.angle) * r + panY * drift) / scale,
          z,
          opacity: envelope(p) * maxOpacity,
        });
      };

      measure();

      if (window.matchMedia(REDUCED_MOTION).matches) {
        // Parked, not hidden: one instant of the loop, composed.
        list.forEach((card) => place(card, card.p, 0, 0));
        return;
      }

      let panTargetX = 0;
      let panTargetY = 0;
      let panX = 0;
      let panY = 0;

      const onPointer = (e: PointerEvent) => {
        panTargetX = (e.clientX / window.innerWidth - 0.5) * 2 * pan;
        panTargetY = (e.clientY / window.innerHeight - 0.5) * 2 * pan;
      };

      let lastScroll = window.scrollY;
      let scrollPush = 0;
      const onScroll = () => {
        const y = window.scrollY;
        // Signed, so scrolling back up eases the field rather than flooring it.
        // Clamped because a fling, or a jump to an anchor, would otherwise throw
        // every card through a whole flight inside one frame.
        scrollPush += gsap.utils.clamp(-140, 140, y - lastScroll) * scrollBoost * 0.0006;
        lastScroll = y;
      };

      const tick = (_time: number, delta: number) => {
        // `delta` is milliseconds and is already clamped by GSAP's lag
        // smoothing, so a backgrounded tab does not come back to a field that
        // has jumped half a lap.
        const step = (delta / 1000) * (speed / duration);

        panX += (panTargetX - panX) * 0.055;
        panY += (panTargetY - panY) * 0.055;

        const boost = scrollPush;
        scrollPush *= 0.9; // bleeds the last scroll away over ~20 frames

        for (const card of list) {
          card.p = (card.p + step + boost + 1) % 1;
          place(card, card.p, panX, panY);
        }
      };

      // The section sits at the bottom of the page. Running the field while it
      // is three screens away is a frame budget spent on nothing.
      let running = false;
      const start = () => {
        if (running) return;
        lastScroll = window.scrollY;
        gsap.ticker.add(tick);
        running = true;
      };
      const stop = () => {
        if (!running) return;
        gsap.ticker.remove(tick);
        running = false;
      };

      list.forEach((card) => place(card, card.p, 0, 0));

      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) start();
          else stop();
        },
        { rootMargin: "220px 0px" },
      );
      io.observe(node);

      const ro = new ResizeObserver(measure);
      ro.observe(node);

      if (pan > 0) window.addEventListener("pointermove", onPointer, { passive: true });
      if (scrollBoost > 0) window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        // A ticker callback outlives the GSAP context unless it is taken off by
        // hand. This line is the difference between a clean unmount and a loop
        // writing to detached nodes for the rest of the session.
        gsap.ticker.remove(tick);
        running = false;
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("scroll", onScroll);
      };
    },
    {
      scope: field,
      dependencies: [count, duration, depth, speed, pan, scrollBoost, holeX, holeY, maxOpacity],
    },
  );

  // Layout is fixed at mount: a deterministic seed means the same field every
  // time, and none of these values are read again once the ticker is running.
  const rand = mulberry32(0x5eed);
  const slots = Array.from({ length: count }, (_, i) => {
    const image = images[i % images.length];
    const aspect = image.aspect ?? 16 / 10;
    const width = cardWidth * (0.78 + rand() * 0.5);
    return {
      key: i,
      image,
      // Evenly spaced around the circle, then nudged, so it is not a dial.
      angle: (i / count) * Math.PI * 2 + (rand() - 0.5) * 0.7,
      spread: 1 + rand() * 0.42,
      // Spread across the cycle, so the field is full the moment it starts
      // rather than arriving as one volley.
      p: (i / count + rand() * 0.05) % 1,
      width,
      height: width / aspect,
    };
  });

  return (
    <div
      ref={field}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ perspective: `${PERSPECTIVE}px` }}
    >
      {slots.map((slot) => (
        <div
          key={slot.key}
          ref={(el) => {
            cards.current[slot.key] = {
              el,
              set: cards.current[slot.key]?.set ?? null,
              angle: slot.angle,
              ax: Math.abs(Math.cos(slot.angle)),
              ay: Math.abs(Math.sin(slot.angle)),
              spread: slot.spread,
              p: cards.current[slot.key]?.p ?? slot.p,
              w: slot.width,
              h: slot.height,
            };
          }}
          className="absolute left-1/2 top-1/2 overflow-hidden rounded-xl shadow-[0_24px_60px_rgba(3,7,18,0.34)] ring-1 ring-white/15"
          style={{
            width: `${slot.width}px`,
            height: `${slot.height}px`,
            opacity: 0,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={slot.image.src}
            alt=""
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover"
            // Desaturated on purpose. Eleven full-colour photographs over the
            // brand gradient is two colour schemes fighting; held back, they
            // read as texture and the gradient stays the thing you see.
            style={{ filter: "saturate(0.42) contrast(1.04)" }}
          />
        </div>
      ))}

      {scrim && (
        <div className="pointer-events-none absolute inset-0" style={{ background: scrim }} />
      )}
    </div>
  );
}

export default ImageFlyIn;
