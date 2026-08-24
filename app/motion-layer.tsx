"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
  ".hero-copy",
  ".brand-hero-visual",
  ".home-quick-links > a",
  ".page-hero > *",
  ".about-hero > *",
  ".massotherapy-brand-copy > *",
  ".massotherapy-brand-logo",
  ".massotherapy-summary > *",
  ".section-heading",
  ".card-grid > *",
  ".technique-grid > *",
  ".process-list > li",
  ".section-split > *",
  ".article-aside > *",
  ".faq-list > details",
  ".massotherapy-content-callout > *",
  ".massotherapy-instagram > *",
  ".article-grid > *",
  ".editorial-hub-hero > *",
  ".editorial-card-grid > *",
  ".editorial-hub-cta > *",
  ".technique-article-header > *",
  ".related-technique-grid > *",
  ".final-cta > *",
  ".contact-direct-card",
].join(",");

export function MotionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      root.classList.remove("motion-ready");
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );

    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty(
        "--motion-delay",
        `${Math.min(index % 4, 3) * 55}ms`,
      );

      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        element.classList.add("is-visible");
      }
    });

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
      elements.forEach((element) => {
        element.classList.remove("motion-reveal", "is-visible");
        element.style.removeProperty("--motion-delay");
      });
    };
  }, [pathname]);

  return null;
}
