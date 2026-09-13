/**
 * Where the product is, as seen from the public landing site.
 *
 * The landing site and the editor are two deployments on two hosts now —
 * `webxite.org` serves this, `app.webxite.org` serves the editor — so every
 * link out of here has to name that host. It used to need none: the apex *was*
 * the editor, and the sign-in page was a path away.
 *
 * Vite inlines `import.meta.env.VITE_*` at build time, so this is a build-time
 * value and not something the running container can be told. Outside a Vite
 * build `import.meta.env` is undefined, hence the optional chaining.
 */
const env = import.meta.env as Record<string, string | undefined> | undefined;

const raw = env?.VITE_APP_URL?.trim();

/** The editor's origin, without a trailing slash. */
export const APP_URL = (raw || "https://app.webxite.org").replace(/\/+$/, "");

/** Where "sign in" goes. */
export const SIGN_IN_URL = `${APP_URL}/login`;

/** Where "get started" goes. */
export const SIGN_UP_URL = `${APP_URL}/signup`;
