import { useEffect, useRef } from 'react';

/**
 * Adds .reveal class to children and triggers .visible
 * when they enter the viewport.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
