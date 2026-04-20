import { useEffect } from 'react';

/**
 * Set document title (and optional meta description) for the current route.
 * @param {string} title
 * @param {{ description?: string }} [options]
 */
export function useDocumentTitle(title, options = {}) {
  const { description } = options;

  useEffect(() => {
    document.title = title;
    if (description != null) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);
}
