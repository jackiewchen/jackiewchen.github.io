export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  cardDescription: string
  overview: string
  techStack: string[]
  focus: string[]
  role: string
  keyContributions: string[]
  whatLearned: string
  imageUrl?: string
  imageAlt?: string
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'split-it',
    title: 'Split-It Mobile Expense App',
    cardDescription:
      'A React Native expense-sharing app for managing shared expenses and group-based spending.',
    overview:
      'A mobile expense-sharing app built with React Native, TypeScript, Expo, and Firebase for managing shared expenses and group-based spending.',
    techStack: ['React Native', 'TypeScript', 'Expo', 'Firebase'],
    focus: ['Mobile development', 'Frontend flows', 'Product-focused UI'],
    role:
      'Contributed to navigation, group management, profile flows, camera-scanning features, and UI cleanup as part of a seven-person team.',
    keyContributions: [
      'Built and refined user-facing mobile screens and flows.',
      'Helped implement group and profile-related functionality.',
      'Improved UI consistency and usability across parts of the app.',
      'Contributed to camera-scanning related features.',
    ],
    whatLearned:
      'I gained more experience building mobile app flows, working in a team codebase, and connecting product requirements to user-facing features.',
  },
  {
    slug: 'ucsb-courses-search',
    title: 'UCSB Courses Search',
    cardDescription:
      'A full-stack web application for searching and exploring UCSB course information.',
    overview:
      'A full-stack web application for UCSB course search, built to help users search and explore course information through a web interface backed by APIs and databases.',
    techStack: [
      'React',
      'Java Spring Boot',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'OAuth',
      'Automated testing',
    ],
    focus: ['Full-stack web development', 'APIs', 'Database-backed search'],
    role:
      'Worked on a full-stack web application involving frontend UI, backend APIs, database-backed functionality, authentication, Docker, and testing.',
    keyContributions: [
      'Built and connected frontend views to backend API functionality.',
      'Worked with database-backed course search features.',
      'Used Docker and testing workflows to support development.',
      'Practiced full-stack web development across frontend, backend, and data layers.',
    ],
    whatLearned:
      'I strengthened my understanding of how frontend interfaces, backend services, databases, authentication, and testing fit together in a full-stack web application.',
  },
  {
    slug: 'operating-systems-components',
    title: 'Operating Systems Components',
    cardDescription:
      'Systems programming projects covering shells, threading, copy-on-write storage, and filesystems.',
    overview:
      'A collection of systems programming projects including a Unix-style shell, preemptive user-level threading library, thread-local storage with copy-on-write, and a virtual filesystem.',
    techStack: ['C', 'C++', 'POSIX', 'Signals', 'Threads', 'Filesystems'],
    focus: ['Systems programming', 'Concurrency', 'Memory', 'Filesystems'],
    role:
      'Implemented systems-level components focused on process control, scheduling, memory behavior, threading, and filesystem concepts.',
    keyContributions: [
      'Built Unix-style shell functionality using process and command execution concepts.',
      'Implemented user-level threading and scheduling behavior.',
      'Worked with thread-local storage and copy-on-write behavior.',
      'Built filesystem-related functionality through low-level systems programming.',
    ],
    whatLearned:
      'I developed stronger systems programming skills and a deeper understanding of concurrency, memory management, process behavior, and filesystem abstractions.',
  },
]
