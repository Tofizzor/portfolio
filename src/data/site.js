/** Site-wide copy and defaults (single source of truth). */

export const site = {
  name: 'Justas Karalevicius',
  title: 'Justas — Developer & product builder',
  /** Short positioning line for hero / meta */
  tagline: 'Software developer focused on shipping products end to end.',
  description:
    'Portfolio showcasing software development work—from discovery through delivery—with concrete projects, demos, and outcomes.',
  /** Used in footer / contact */
  email: 'karalevicius@gmail.com',
  location: 'Available for remote & hybrid',
  social: {
    github: 'https://github.com/Tofizzor',
    linkedin: 'https://www.linkedin.com/in/justas-karalevicius/',
  },
  /** Default meta when a page does not override */
  defaultMeta: {
    title: 'Justas — Portfolio',
    description:
      'Software developer and product builder. Projects, stack, and how I ship.',
  },
};

/** In-page sections for the one-page layout (hash links). */
export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];
