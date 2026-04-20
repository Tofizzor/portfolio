/**
 * Professional experience, certifications, and stack for the Experience page.
 */

/** @typedef {'bofa' | 'mthree' | 'linkedin'} CompanyLogoId */

/**
 * @typedef {object} ExperienceRole
 * @property {string} title
 * @property {string} dates Human-readable range (e.g. "Dec 2024 – Present")
 * @property {string} duration
 * @property {string} location
 * @property {string[]} [skills] Skill chips shown for the role
 */

/**
 * @typedef {object} ExperienceEmployer
 * @property {CompanyLogoId} logo
 * @property {string} company
 * @property {string} [employmentType] e.g. "Full-time"
 * @property {string} [totalTenure] Summary line when multiple roles exist
 * @property {ExperienceRole[]} [roles] Nested positions at the same company
 * @property {string} [headline] Single-role title line (e.g. client placement)
 * @property {string} [dates] For flat entries
 * @property {string} [duration]
 * @property {string} [location]
 */

/** @type {ExperienceEmployer[]} */
export const employers = [
  {
    logo: 'bofa',
    company: 'Bank of America',
    employmentType: 'Full-time',
    totalTenure: '3 yrs 6 mos',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'Dec 2024 – Present',
        duration: '1 yr 5 mos',
        location: 'London Area, United Kingdom',
        skills: [
          'Python',
          'FastAPI',
          'React',
          'Tailwind CSS',
          'WebSockets',
          'MongoDB',
          'Pydantic',
          'Encryption & inter-service messaging',
        ],
      },
      {
        title: 'AVP - SRE in Equities Trading',
        dates: 'Aug 2023 – Dec 2024',
        duration: '1 yr 5 mos',
        location: 'Greater London, England, United Kingdom',
        skills: [
          'APIs & service reliability',
          'Agile delivery',
          'Python',
          'Automation & AI-assisted workflows',
        ],
      },
      {
        title: 'AVP - Production Support in Equities Trading',
        dates: 'Nov 2022 – Aug 2023',
        duration: '10 mos',
        location: 'Greater London, England, United Kingdom',
        skills: ['Ansible', 'Bitbucket', 'Unix', 'Incident response'],
      },
    ],
  },
  {
    logo: 'mthree',
    company: 'mthree',
    employmentType: 'Full-time',
    headline: 'Production Support Analyst | Bank of America',
    dates: 'Aug 2020 – Nov 2022',
    duration: '2 yrs 4 mos',
    location: 'Greater London, England, United Kingdom',
  },
];

/**
 * @typedef {object} Certification
 * @property {string} title
 * @property {string} issuer
 * @property {string} issuedLabel e.g. "Issued Feb 2020"
 * @property {string} [credentialUrl] Optional public link
 */

/** @type {Certification[]} */
export const certifications = [
  { title: 'React: Creating and Hosting a Full-Stack Site', issuer: 'LinkedIn', issuedLabel: 'Issued Feb 2020' },
  { title: 'C# & .NET: Programming', issuer: 'LinkedIn', issuedLabel: 'Issued Nov 2019' },
  { title: 'Learning C#', issuer: 'LinkedIn', issuedLabel: 'Issued Nov 2019' },
  { title: 'Agile Foundations', issuer: 'LinkedIn', issuedLabel: 'Issued Nov 2019' },
  { title: 'Agile Software Development', issuer: 'LinkedIn', issuedLabel: 'Issued Nov 2019' },
  { title: 'Advanced SQL for Data Scientists', issuer: 'LinkedIn', issuedLabel: 'Issued Nov 2019' },
  { title: 'SQL Essential Training', issuer: 'LinkedIn', issuedLabel: 'Issued Nov 2019' },
];

/**
 * @typedef {object} StackGroup
 * @property {string} title
 * @property {string} blurb One short line clarifying how you use it
 * @property {string[]} items Technology names (shown as chips)
 */

/** Grouped “current stack” — what you build with today. */
/** @type {StackGroup[]} */
export const stackGroups = [
  {
    title: 'Backend & realtime',
    blurb: 'Typed APIs, workers, and live channels.',
    items: ['Python', 'FastAPI', 'Gunicorn', 'WebSockets', 'Pydantic'],
  },
  {
    title: 'Frontend',
    blurb: 'Product UI next to the services I own.',
    items: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Data & persistence',
    blurb: 'Document storage and analysis in Python.',
    items: ['MongoDB', 'pandas'],
  },
  {
    title: 'Security & crypto',
    blurb: 'Protecting credentials and payloads between servers.',
    items: ['AES / crypto in Python models', 'Credential encryption', 'Encrypted inter-service messages'],
  },
  {
    title: 'Automation & platform',
    blurb: 'Glue and repeatability on Windows-heavy estates.',
    items: ['PowerShell scripting'],
  },
];
