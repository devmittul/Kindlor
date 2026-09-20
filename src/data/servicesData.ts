export interface DetailedService {
  number: string;
  category: string;
  headline: string;
  copy: string;
  suitableFor?: string[];
  includes?: string[];
  possibleFeatures?: string[];
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    number: '01',
    category: 'BUSINESS WEBSITE DEVELOPMENT',
    headline: 'A WEBSITE BUILT AROUND YOUR BUSINESS.',
    copy: 'We create responsive business websites that clearly communicate what you offer, establish credibility and guide visitors toward the next action.',
    suitableFor: [
      'Local businesses',
      'Professional services',
      'Restaurants',
      'Clinics',
      'Gyms',
      'Growing brands',
      'Service businesses',
    ],
    includes: [
      'Responsive design',
      'SEO foundations',
      'Fast performance',
      'Clear navigation',
      'Contact and enquiry flows',
      'Analytics-ready structure',
      'Custom visual identity',
    ],
  },
  {
    number: '02',
    category: 'WHATSAPP LEAD SYSTEMS',
    headline: 'FROM WEBSITE VISITOR TO WHATSAPP CONVERSATION.',
    copy: 'Make it easier for potential customers to contact your business. We can connect your website to structured WhatsApp enquiry flows so customers can start the right conversation without unnecessary friction.',
    includes: [
      'Contextual 1-click WhatsApp buttons',
      'Pre-filled inquiry templates',
      'Lead routing to designated team members',
      'Instant lead notification alerts',
    ],
  },
  {
    number: '03',
    category: 'BOOKING & APPOINTMENT SYSTEMS',
    headline: 'LET CUSTOMERS BOOK WITHOUT THE BACK-AND-FORTH.',
    copy: 'Build online booking experiences for appointments, consultations, services, classes and other scheduled activities.',
    possibleFeatures: [
      'Service selection',
      'Availability',
      'Date and time selection',
      'Booking forms',
      'Confirmation',
      'Reminders',
      'Calendar integrations',
    ],
  },
  {
    number: '04',
    category: 'RESTAURANT & HOSPITALITY SYSTEMS',
    headline: 'TURN YOUR WEBSITE INTO A CUSTOMER ENTRY POINT.',
    copy: 'Restaurant and hospitality websites can go beyond menus and photos. Build digital experiences around menus, reservations, table availability, enquiries and customer communication.',
    includes: [
      'Interactive digital menus',
      'Table reservation engine',
      'Takeaway pre-order inquiry flows',
      'Event & party reservation forms',
    ],
  },
  {
    number: '05',
    category: 'CUSTOM BUSINESS AUTOMATION',
    headline: 'REMOVE REPETITIVE WORK FROM THE WORKFLOW.',
    copy: 'Connect forms, APIs, databases, notifications, CRM systems, WhatsApp and internal tools to reduce repetitive manual work. The exact automation depends on how your business operates.',
    includes: [
      'CRM webhook sync',
      'Automated email sequences',
      'Spreadsheet auto-logging',
      'Internal team notifications (WhatsApp/Slack)',
    ],
  },
  {
    number: '06',
    category: 'CUSTOM WEB APPLICATIONS',
    headline: 'WHEN A WEBSITE IS NOT ENOUGH.',
    copy: 'For businesses that need dashboards, portals, internal tools, customer accounts or custom workflows, Kindlor can design and develop the application layer behind the experience.',
    includes: [
      'Custom web applications',
      'Client portals & dashboards',
      'REST API integrations',
      'Database integration & state management',
    ],
  },
];
