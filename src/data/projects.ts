export type Project = {
  title: string
  description: string
  tags: string[]
  imageUrl?: string
  imageAlt?: string
  liveUrl: string
  sourceUrl: string
}

export const projects: Project[] = [
  {
    title: 'Split It',
    description:
      'A group expense tracking app concept that helps friends record bills, balances, and payments clearly.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    liveUrl: 'https://example.com/split-it',
    sourceUrl: 'https://github.com/your-username/split-it',
  },
  {
    title: 'Network Trace Explorer',
    description:
      'A coursework tool for reviewing queue traces and turning experiment output into readable summaries.',
    tags: ['Python', 'Data Visualization', 'Research'],
    liveUrl: 'https://example.com/network-trace-explorer',
    sourceUrl: 'https://github.com/your-username/network-trace-explorer',
  },
  {
    title: 'Portfolio Website',
    description:
      'A clean personal portfolio built with React, TypeScript, Vite, and regular CSS.',
    tags: ['React', 'TypeScript', 'CSS'],
    liveUrl: 'https://example.com/portfolio',
    sourceUrl: 'https://github.com/your-username/portfolio',
  },
]
