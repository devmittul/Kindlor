export interface Founder {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  focusTitle: string;
  focus: string[];
  portfolioUrl: string;
  image: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: 'MITTUL',
    role: 'CO-FOUNDER / ENGINEERING & SYSTEMS',
    discipline: 'ENGINEERING & ARCHITECTURE',
    bio: 'Mittul leads the technical side of Kindlor, including backend architecture, application structure, APIs, databases, integrations and business automation.',
    focusTitle: 'TECHNICAL FOCUS:',
    focus: [
      'Backend Development',
      'Application Architecture',
      'APIs & Integrations',
      'Databases',
      'Automation',
      'Deployment',
    ],
    portfolioUrl: 'https://portfolio.mittul.codes/',
    image: '/images/founders/mittul.webp'
  },
  {
    name: 'ARSHMEEN',
    role: 'CO-FOUNDER / UI/UX & DESIGN',
    discipline: 'UI/UX & VISUAL DIRECTION',
    bio: 'Arshmeen leads the design side of Kindlor, focusing on UI/UX, visual direction, user flows and interface systems.',
    focusTitle: 'DESIGN FOCUS:',
    focus: [
      'UI/UX Design',
      'Visual Design',
      'User Experience',
      'Design Systems',
      'Interface Structure',
    ],
    portfolioUrl: 'https://arshmeen.codes/',
    image: '/images/founders/arshmeen.jpg'
  },
];
