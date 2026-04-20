/**
 * @typedef {Object} ProjectLinks
 * @property {string} [live]
 * @property {string} [repo]
 */

/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} tagline
 * @property {string} role
 * @property {string[]} stack
 * @property {ProjectLinks} links
 * @property {string[]} highlights
 * @property {string} [thumbnail] Public URL under / or import path
 * @property {string} [body] Longer case-study copy for detail page
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: 'sample-product-app',
    title: 'Sample product app',
    tagline: 'End-to-end web app with auth, API integration, and deploy pipeline.',
    role: 'Full-stack developer — owned scope, build, and release.',
    stack: ['React', 'Vite', 'Node.js', 'PostgreSQL'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/Tofizzor/portfolio',
    },
    highlights: [
      'Defined MVP scope and shipped iteratively based on feedback.',
      'Implemented responsive UI and static-friendly hosting story.',
      'Documented trade-offs for performance vs. time-to-ship.',
    ],
    thumbnail: '/og-placeholder.svg',
    body: `This placeholder project demonstrates how case studies will read on the detail page.
Use this space for problem context, constraints, what you built, metrics, and lessons learned.`,
  },
  {
    slug: 'developer-tooling-cli',
    title: 'Developer tooling CLI',
    tagline: 'Small CLI to automate repetitive workflows for the team.',
    role: 'Author — design, implementation, and docs.',
    stack: ['Node.js', 'TypeScript'],
    links: {
      repo: 'https://github.com/Tofizzor/portfolio',
    },
    highlights: [
      'Reduced manual steps for common tasks.',
      'Shipped with tests and clear usage docs.',
    ],
    thumbnail: '/og-placeholder.svg',
    body: `Replace with a real write-up: why the tool existed, how others adopted it, and maintenance story.`,
  },
];

/**
 * @param {string} slug
 * @returns {Project | undefined}
 */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
