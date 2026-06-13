"use client";

import { useEffect } from "react";

function RevealObserver() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let timeoutId: number | undefined;

    const initReveal = () => {
      const root = document.documentElement;
      root.classList.add("reveal-ready");

      const getRevealElements = (parent: ParentNode = document) =>
        Array.from(parent.querySelectorAll<HTMLElement>("[data-reveal]"));

      const elements = getRevealElements();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        elements.forEach((element) => element.classList.add("reveal-visible"));
        cleanup = () => {
          root.classList.remove("reveal-ready");
        };
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -80px 0px",
        },
      );

      const observeElement = (element: HTMLElement) => {
        if (element.classList.contains("reveal-visible")) return;
        observer.observe(element);
      };

      elements.forEach(observeElement);

      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;

            if (node.matches("[data-reveal]")) {
              observeElement(node);
            }

            getRevealElements(node).forEach(observeElement);
          });
        });
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });

      cleanup = () => {
        mutationObserver.disconnect();
        observer.disconnect();
        root.classList.remove("reveal-ready");
      };
    };

    const scheduleInitReveal = () => {
      timeoutId = window.setTimeout(initReveal, 120);
    };

    if (document.readyState === "complete") {
      scheduleInitReveal();
    } else {
      window.addEventListener("load", scheduleInitReveal, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleInitReveal);

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      cleanup?.();
    };
  }, []);

  return null;
}

export default RevealObserver;
