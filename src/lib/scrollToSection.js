/**
 * Smooth-scroll to an element by id. If the target is a `details` element, opens it first.
 * @param {string} hash Including leading #, e.g. "#projects"
 */
export function scrollToSection(hash) {
  if (!hash.startsWith('#')) return;
  const id = hash.slice(1);
  const target = document.getElementById(id);
  if (!target) return;

  if (target instanceof HTMLDetailsElement) {
    target.open = true;
  }

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  if (window.history?.replaceState) {
    window.history.replaceState(null, '', hash);
  }
}
