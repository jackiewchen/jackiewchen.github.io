export type ProjectLink = {
  label: string
  href: string
}

export type ProjectPreview = {
  variant: 'mobile' | 'search' | 'graphics' | 'systems'
  label: string
  heading: string
  items: string[]
}

export type Project = {
  slug: string
  title: string
  featured: boolean
  cardDescription: string
  cardTags: string[]
  preview: ProjectPreview
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
    featured: true,
    cardDescription:
      'A React Native expense-sharing app for managing groups, shared expenses, payments, and balances.',
    cardTags: ['React Native', 'TypeScript', 'Firebase', 'Mobile App'],
    preview: {
      variant: 'mobile',
      label: 'Mobile app',
      heading: 'Expense groups preview',
      items: ['Groups', 'Balances', 'Payments'],
    },
    overview:
      'A mobile expense-sharing app built with React Native, TypeScript, Expo, and Firebase for managing shared expenses, groups, payments, and balances.',
    techStack: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Jest'],
    focus: [
      'Mobile development',
      'Frontend flows',
      'Product-focused UI',
      'Authentication',
      'Firestore data flows',
    ],
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
    featured: true,
    cardDescription:
      'A full-stack course search app with a React frontend, Spring Boot APIs, PostgreSQL data storage, Dockerized development, and automated testing.',
    cardTags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    preview: {
      variant: 'search',
      label: 'Full-stack web',
      heading: 'Course search preview',
      items: ['Search', 'Course cards', 'Filters'],
    },
    overview:
      'A full-stack web application for UCSB course search, built to help users search and explore course information through a web interface backed by APIs and databases.',
    techStack: [
      'React',
      'Spring Boot',
      'Java',
      'REST APIs',
      'PostgreSQL',
      'Docker',
      'Automated testing',
    ],
    focus: [
      'Full-stack web development',
      'API integration',
      'Database-backed search',
      'Testing',
    ],
    role:
      'Worked on frontend views, backend API integration, database-backed functionality, Docker workflows, and testing.',
    keyContributions: [
      'Built and connected frontend views to backend API functionality.',
      'Worked with database-backed course search features.',
      'Used Docker and testing workflows to support development.',
      'Practiced full-stack web development across frontend, backend, and data layers.',
    ],
    whatLearned:
      'I strengthened my understanding of how frontend interfaces, backend services, databases, and testing fit together in a full-stack web application.',
  },
  {
    slug: 'computer-graphics',
    title: 'Computer Graphics Projects',
    featured: true,
    cardDescription:
      'A collection of C++ graphics projects including a BVH-accelerated ray tracer, rasterization with z-buffering, and mass-spring simulation.',
    cardTags: ['C++', 'Ray Tracing', 'Rasterization', 'Simulation'],
    preview: {
      variant: 'graphics',
      label: 'Computer graphics',
      heading: 'Rendering pipeline preview',
      items: ['BVH', 'Ray tracing', 'Simulation'],
    },
    overview:
      'A collection of C++ graphics projects involving rendering, ray tracing, BVH acceleration structures, rasterization, z-buffering, and mass-spring simulation.',
    techStack: [
      'C++',
      'Rendering',
      'Ray Tracing',
      'BVH',
      'Rasterization',
      'Simulation',
    ],
    focus: [
      'Computer graphics',
      'C++ programming',
      'Rendering algorithms',
      'Simulation',
    ],
    role:
      'Implemented graphics algorithms and simulation behavior through custom C++ rendering and computation pipelines.',
    keyContributions: [
      'Built rendering and ray tracing functionality in C++.',
      'Worked with BVH acceleration structures for rendering performance.',
      'Implemented rasterization and z-buffering concepts.',
      'Built mass-spring simulation behavior for graphics coursework.',
    ],
    whatLearned:
      'I developed stronger C++ programming skills and a better understanding of rendering algorithms, geometric data structures, and simulation techniques.',
  },
  {
    slug: 'operating-systems-components',
    title: 'Operating Systems Components',
    featured: false,
    cardDescription:
      'Systems programming projects covering shells, threading, copy-on-write storage, and filesystems.',
    cardTags: ['C', 'C++', 'POSIX', 'Systems'],
    preview: {
      variant: 'systems',
      label: 'Systems programming',
      heading: 'OS components preview',
      items: ['Shell', 'Threads', 'Filesystem'],
    },
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

export const featuredProjects = projects.filter((project) => project.featured)
