export type ExperienceItem = {
  role: string
  organization: string
  period: string
  summary: string
  highlights: string[]
}

// Edit this array to update the Experience section.
// Keep entries concise and application-focused: role, organization, dates,
// summary, and specific highlights.
export const experience: ExperienceItem[] = [
  {
    role: 'Project Management & UX/UI Intern',
    organization: 'Waymo',
    period: 'Jun. 2024 - Aug. 2024',
    summary:
      'Built a front-end informational website and contributed product and UX research for a proposed autonomous vehicle service in San Diego.',
    highlights: [
      'Built an informational website using HTML, CSS, and JavaScript to present research findings, product strategy, and UX concepts.',
      'Conducted user interviews and usability sessions to identify accessibility needs, pain points, and opportunities to improve the rider experience.',
      'Combined market research, user findings, and deployment considerations into a business proposal and product model.',
      'Coordinated a 20+ person intern team by organizing responsibilities, tracking project timelines, facilitating collaboration, and preparing the final presentation.',
    ],
  },
  {
    role: 'CSSI Scholar',
    organization: 'Google Computer Science Summer Institute',
    period: 'Jul. 2022 - Aug. 2022',
    summary:
      'Selected for Google\u2019s four-week project-based computer science program focused on web development, APIs, product design, and software engineering fundamentals.',
    highlights: [
      'Built 14 individual JavaScript projects applying core web development concepts and interactive UI features.',
      'Built and presented a collaborative JavaScript web application using the Canvas API, Bulma, and the GIPHY API.',
      'Presented the final project to Google employees and community leaders and participated in workshops on product design, artificial intelligence, and technical interview preparation.',
    ],
  },
]
