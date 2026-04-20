import { useEffect, useState } from 'react';

/** ~sticky header (3.5rem) + small buffer; works for mobile and desktop header heights */
const HEADER_SLOP = 80;

/**
 * Tracks which section id is currently “active” for nav highlighting while scrolling.
 * @param {string[]} sectionIds Top-to-bottom order
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'home');

  useEffect(() => {
    const onScroll = () => {
      let current = sectionIds[0] ?? 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        if (top <= HEADER_SLOP) current = id;
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return activeId;
}
