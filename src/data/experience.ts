export type ExperienceItem = {
  role: string
  organization: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineering Student',
    organization: 'University Coursework',
    period: '2024 - Present',
    summary:
      'Building a foundation in web development, data structures, operating systems, and collaborative software projects.',
    highlights: [
      'Implemented React and TypeScript interfaces for class and personal projects.',
      'Practiced Git workflows, code reviews, testing, and technical documentation.',
    ],
  },
  {
    role: 'Frontend Developer',
    organization: 'Personal Projects',
    period: '2023 - Present',
    summary:
      'Designing and shipping small applications that focus on clear user flows, readable code, and responsive layouts.',
    highlights: [
      'Created reusable components for project dashboards and portfolio pages.',
      'Used plain CSS to build accessible layouts across desktop and mobile screens.',
    ],
  },
]
