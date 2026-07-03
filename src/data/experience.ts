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
      'Supported product strategy and UX/UI recommendations for an intern project focused on autonomous vehicle services in San Diego.',
    highlights: [
      'Developed a business proposal and product model for launching autonomous vehicle services in San Diego.',
      'Researched market needs, user pain points, and deployment considerations to support product strategy and UX/UI recommendations.',
      'Built an HTML/CSS/JavaScript web portfolio and helped present final recommendations with a 20+ person intern team.',
    ],
  },
  {
    role: 'CSSI Scholar',
    organization: 'Google Computer Science Summer Institute',
    period: 'Jul. 2022 - Aug. 2022',
    summary:
      'Selected for a 4-week Google program focused on web development, product design, and software engineering fundamentals.',
    highlights: [
      'Completed Google\'s 4-week Computer Science Summer Institute focused on JavaScript, HTML/CSS, APIs, product design, and software engineering fundamentals.',
      'Built and presented a collaborative JavaScript web app using the Canvas API, Bulma, and GIPHY API.',
      'Completed individual coding projects focused on web development concepts and interactive user interfaces.',
    ],
  },
]
