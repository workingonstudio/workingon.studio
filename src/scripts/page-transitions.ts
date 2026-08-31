import { gsap } from "gsap";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(50);
}

const SELECTOR = "[data-transition-wrapper]";
let transitioning = false;

document.addEventListener("astro:before-preparation", (event) => {
  const originalLoader = event.loader;

  event.loader = async () => {
    if (transitioning) {
      await originalLoader();
      return;
    }
    transitioning = true;

    gsap.killTweensOf(SELECTOR);
    await gsap.to(SELECTOR, {
      opacity: 0,
      y: -16,
      duration: 0.35,
      ease: "power2.in",
    });
    document.documentElement.dataset.transitioning = "true";
    await originalLoader();
  };
});

document.addEventListener("astro:page-load", () => {
  gsap.killTweensOf(SELECTOR);
  gsap.fromTo(
    SELECTOR,
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        delete document.documentElement.dataset.transitioning;
        transitioning = false;
      },
    }
  );
});
