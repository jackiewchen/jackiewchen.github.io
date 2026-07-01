export type ProjectLink = {
  label: string
  href: string
}

export type ProjectPreview = {
  variant: 'mobile' | 'search' | 'graphics' | 'systems' | 'network' | 'ai'
  label: string
  heading: string
  items: string[]
}

export type Project = {
  slug: string
  title: string
  category: string
  featured: boolean
  cardDescription: string
  cardTags: string[]
  preview: ProjectPreview
  overview: string
  techStack: string[]
  focus: string[]
  role: string
  keyContributions: string[]
  technicalTakeaways: string
  imageUrl?: string
  imageAlt?: string
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'split-it',
    title: 'Split-It Mobile Expense App',
    category: 'Mobile App',
    featured: true,
    cardDescription:
      'A React Native expense-sharing app for managing groups, shared expenses, payments, and balances. I contributed to navigation, group management, profile flows, camera-scanning workflows, and Firebase-backed app functionality.',
    cardTags: ['React Native', 'TypeScript', 'Firebase', 'Mobile App'],
    preview: {
      variant: 'mobile',
      label: 'Mobile App',
      heading: 'Expense-sharing mobile app',
      items: ['Groups', 'Balances', 'Payments'],
    },
    overview:
      'A React Native mobile app for splitting shared expenses across groups, payments, and balances. The app was built with TypeScript, Expo, Firebase Authentication, Firestore, and testing support through Jest and React Native Testing Library.',
    techStack: [
      'React Native',
      'TypeScript',
      'Expo',
      'Firebase',
      'Jest',
      'React Native Testing Library',
    ],
    focus: [
      'Mobile development',
      'Frontend flows',
      'Product-focused UI',
      'Authentication',
      'Firestore data flows',
    ],
    role:
      'Contributed to user-facing mobile workflows including navigation, group management, profile flows, camera-scanning features, responsive UI components, and Firebase-backed app functionality.',
    keyContributions: [
      'Built and refined React Native screens for group management, profiles, and navigation flows.',
      'Implemented editable group settings and responsive mobile UI components.',
      'Contributed to camera-scanning workflows for expense-related app features.',
      'Integrated Firebase Authentication and Firestore-backed data flows.',
      'Tested mobile app functionality with Jest and React Native Testing Library.',
    ],
    technicalTakeaways:
      'Strengthened experience building mobile app flows, working in a team codebase, connecting frontend screens to Firebase-backed data, and translating product requirements into user-facing features.',
  },
  {
    slug: 'ucsb-courses-search',
    title: 'UCSB Courses Search',
    category: 'Full-Stack Web',
    featured: true,
    cardDescription:
      'A full-stack course search app with a React frontend, Spring Boot REST APIs, PostgreSQL data storage, Dockerized development, and automated testing.',
    cardTags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    preview: {
      variant: 'search',
      label: 'Full-Stack Web',
      heading: 'Course search web app',
      items: ['Search', 'Schedules', 'APIs'],
    },
    overview:
      'A full-stack web application for searching and exploring UCSB course information through a React frontend, Java Spring Boot REST APIs, PostgreSQL-backed data, Dockerized development, and automated testing workflows.',
    techStack: [
      'React',
      'Java Spring Boot',
      'REST APIs',
      'PostgreSQL',
      'Docker',
      'Jest',
      'React Testing Library',
      'JUnit',
    ],
    focus: [
      'Full-stack web development',
      'API integration',
      'Database-backed search',
      'Testing',
    ],
    role:
      'Built frontend components, connected course search and schedule-management features to API workflows, worked with database-backed functionality, and used Docker and testing workflows during development.',
    keyContributions: [
      'Built React components for course search and schedule-management features.',
      'Integrated frontend API workflows with React Query and Axios.',
      'Worked with Java Spring Boot REST APIs and PostgreSQL-backed data.',
      'Used Docker-based development workflows to run and test the application.',
      'Worked with automated testing tools such as Jest, React Testing Library, JUnit, and JaCoCo where applicable.',
    ],
    technicalTakeaways:
      'Built stronger full-stack web development experience across frontend views, backend APIs, databases, Docker-based development, and automated testing workflows.',
  },
  {
    slug: 'computer-graphics',
    title: 'Computer Graphics Projects',
    category: 'Computer Graphics',
    featured: true,
    cardDescription:
      'A collection of C++ graphics projects involving ray tracing, BVH acceleration, rasterization with z-buffering, and mass-spring simulation.',
    cardTags: ['C++', 'Ray Tracing', 'Rasterization', 'Simulation'],
    preview: {
      variant: 'graphics',
      label: 'Computer Graphics',
      heading: 'C++ rendering projects',
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
      'Implemented coordinate transforms, triangle rasterization, z-buffering, ray-triangle intersection, and bounding boxes.',
      'Built ray-based mesh rendering with BVH acceleration structures.',
      'Worked with midpoint and surface-area-heuristic BVH construction approaches.',
      'Simulated mass-spring systems using Euler and Verlet integration.',
      'Rendered visual outputs through custom C++ graphics pipelines.',
    ],
    technicalTakeaways:
      'Developed stronger C++ programming skills and a better understanding of rendering algorithms, geometric data structures, acceleration structures, and simulation techniques.',
  },
  {
    slug: 'operating-systems-components',
    title: 'Operating Systems Components',
    category: 'Systems Programming',
    featured: false,
    cardDescription:
      'Systems programming projects covering a Unix-style shell, user-level threading, thread-local storage with copy-on-write, and virtual filesystem concepts.',
    cardTags: ['C', 'C++', 'POSIX', 'Threads', 'Filesystems'],
    preview: {
      variant: 'systems',
      label: 'Systems Programming',
      heading: 'OS components project suite',
      items: ['Shell', 'Threads', 'Filesystem'],
    },
    overview:
      'A collection of systems programming projects including a Unix-style shell, preemptive user-level threading library, thread-local storage with copy-on-write, and a virtual filesystem.',
    techStack: ['C', 'C++', 'POSIX', 'Signals', 'Threads', 'Filesystems'],
    focus: ['Systems programming', 'Concurrency', 'Memory', 'Filesystems'],
    role:
      'Implemented systems-level components focused on process control, command execution, scheduling, threading, memory behavior, and filesystem abstractions.',
    keyContributions: [
      'Built Unix-style shell functionality involving process creation, command execution, pipelines, redirection, and signal handling.',
      'Implemented user-level threading and scheduling behavior.',
      'Worked with thread-local storage and copy-on-write memory behavior.',
      'Built filesystem-related functionality through low-level systems programming.',
      'Practiced debugging systems code involving processes, memory, threads, and filesystems.',
    ],
    technicalTakeaways:
      'Developed stronger systems programming skills and a deeper understanding of concurrency, memory management, process behavior, and filesystem abstractions.',
  },
  {
    slug: 'network-congestion-study',
    title: 'Network Congestion Study',
    category: 'Networking',
    featured: false,
    cardDescription:
      'A networking experiment analyzing TCP congestion behavior under controlled bottleneck, latency, queue, and congestion-control settings using Docker-based tooling and Python analysis.',
    cardTags: ['Python', 'Docker', 'TCP', 'Networking'],
    preview: {
      variant: 'network',
      label: 'Networking',
      heading: 'TCP congestion experiment',
      items: ['Latency', 'Queues', 'Throughput'],
    },
    overview:
      'A networking experiment focused on analyzing TCP congestion behavior under controlled network conditions, including bottleneck bandwidth, added latency, queueing policy, buffer size, and congestion-control settings.',
    techStack: ['Python', 'Docker', 'Linux', 'Bash', 'Networking'],
    focus: [
      'Computer networks',
      'TCP congestion control',
      'Experimentation',
      'Data analysis',
    ],
    role:
      'Ran controlled networking experiments, collected experiment outputs, and analyzed performance behavior using Docker-based tooling and Python data analysis.',
    keyContributions: [
      'Ran experiments with controlled bandwidth, latency, queue, buffer, and congestion-control settings.',
      'Used Docker-based tooling to create reproducible networking experiment environments.',
      'Analyzed throughput and network behavior with Python-based data processing.',
      'Interpreted how network conditions affected transport-layer performance.',
    ],
    technicalTakeaways:
      'Gained hands-on experience with networking experiments, TCP congestion behavior, Docker-based tooling, and data-driven performance analysis.',
  },
  {
    slug: 'ai-ml-algorithms',
    title: 'AI/ML Algorithms Projects',
    category: 'AI / Machine Learning',
    featured: false,
    cardDescription:
      'A set of AI and machine learning coursework projects involving search algorithms, heuristics, classification, feature processing, and Python-based analysis.',
    cardTags: ['Python', 'AI', 'Machine Learning', 'Search'],
    preview: {
      variant: 'ai',
      label: 'AI / Machine Learning',
      heading: 'Classical AI and ML projects',
      items: ['Search', 'Features', 'Classification'],
    },
    overview:
      'A set of AI and machine learning coursework projects involving search algorithms, heuristics, classification, feature processing, and Python-based analysis.',
    techStack: [
      'Python',
      'NumPy',
      'pandas',
      'Search Algorithms',
      'Classification',
    ],
    focus: [
      'Artificial intelligence',
      'Machine learning fundamentals',
      'Data processing',
      'Algorithmic problem solving',
    ],
    role:
      'Implemented and analyzed classical AI and machine learning algorithms in Python.',
    keyContributions: [
      'Implemented search and heuristic-based algorithms for problem-solving tasks.',
      'Worked with classification models and feature preprocessing.',
      'Used Python, NumPy, and pandas for data handling and analysis.',
      'Practiced evaluating algorithm behavior and interpreting results.',
    ],
    technicalTakeaways:
      'Built a stronger foundation in AI problem solving, machine learning workflows, feature processing, and Python-based technical analysis.',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
