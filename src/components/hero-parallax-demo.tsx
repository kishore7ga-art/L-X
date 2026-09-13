"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "University of Pennsylvania",
    link: "#showcase",
    thumbnail: "/showcase/penn.jpg",
  },
  {
    title: "University of Chicago",
    link: "#showcase",
    thumbnail: "/showcase/uchicago.jpg",
  },
  {
    title: "Georgetown University",
    link: "#showcase",
    thumbnail: "/showcase/georgetown.jpg",
  },
  {
    title: "University of Oxford",
    link: "#showcase",
    thumbnail: "/showcase/oxford.jpg",
  },
  {
    title: "Cranfield University",
    link: "#showcase",
    thumbnail: "/showcase/cranfield.jpg",
  },
  {
    title: "Queen's University",
    link: "#showcase",
    thumbnail: "/showcase/queens.jpg",
  },
  {
    title: "University of Western Australia",
    link: "#showcase",
    thumbnail: "/showcase/uwa.jpg",
  },
  {
    title: "Queen's University Belfast",
    link: "#showcase",
    thumbnail: "/showcase/queens-belfast.jpg",
  },
  {
    title: "University of Birmingham",
    link: "#showcase",
    thumbnail: "/showcase/birmingham.jpg",
  },
  {
    title: "University of Kent",
    link: "#showcase",
    thumbnail: "/showcase/kent.jpg",
  },
  {
    title: "UC Davis",
    link: "#showcase",
    thumbnail: "/showcase/ucdavis.jpg",
  },
  {
    title: "University of Pennsylvania",
    link: "#showcase",
    thumbnail: "/showcase/penn.jpg",
  },
  {
    title: "University of Chicago",
    link: "#showcase",
    thumbnail: "/showcase/uchicago.jpg",
  },
  {
    title: "Georgetown University",
    link: "#showcase",
    thumbnail: "/showcase/georgetown.jpg",
  },
  {
    title: "University of Oxford",
    link: "#showcase",
    thumbnail: "/showcase/oxford.jpg",
  },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export default HeroParallaxDemo;
