export type ProjectVisualVariant =
  | 'mobile'
  | 'search'
  | 'graphics'
  | 'systems'
  | 'network'
  | 'ai'

export type ProjectGalleryImage = {
  src: string
  alt: string
  caption?: string
}

export type ProjectProofItem = {
  label: string
  detail: string
}

export type Project = {
  title: string
  slug: string
  category: string
  featured: boolean
  previewTitle: string
  description: string
  techStack: string[]
  highlights: string[]
  projectFocus: string[]
  overview: string
  role: string
  contributions: string[]
  technicalTakeaways: string
  projectProof?: ProjectProofItem[]
  thumbnail?: string
  thumbnailAlt?: string
  galleryImages?: ProjectGalleryImage[]
  repoUrl?: string
  demoUrl?: string
  caseStudyUrl?: string
  sourceAvailabilityNote?: string
  visualVariant: ProjectVisualVariant
}

// Project editing notes:
// - Add repoUrl only after the repo is public, cleaned, and safe.
// - Add demoUrl only if there is a real working demo.
// - Add caseStudyUrl only if there is a real writeup page or document.
// - Add thumbnails/gallery images under public/images/projects/ and reference
//   them here as /images/projects/your-file-name.png.
// - Use projectProof for architecture notes, testing/build notes, artifacts,
//   and concise evidence that does not require publishing source code.
// - Keep sourceAvailabilityNote for private/course/team projects.
// - Leave repoUrl/demoUrl/caseStudyUrl undefined to hide those buttons.
export const projects: Project[] = [
  {
    title: 'Split-It Mobile Expense App',
    slug: 'split-it',
    category: 'Mobile App',
    featured: true,
    previewTitle: 'Mobile expense app',
    description:
      'React Native expense-sharing app for groups, shared bills, payments, balances, profiles, and Firebase-backed mobile workflows.',
    techStack: [
      'React Native',
      'TypeScript',
      'Expo',
      'Firebase Auth',
      'Firestore',
      'Jest',
      'React Native Testing Library',
    ],
    highlights: ['React Native', 'TypeScript', 'Firebase', 'Mobile'],
    projectFocus: [
      'Mobile app development',
      'Authentication',
      'Firestore data flows',
      'Group expense workflows',
      'Team development',
    ],
    overview:
      'Split-It is a mobile app for managing shared expenses across groups. Users can create or join groups, add bills and payments, track balances, manage profiles, and use camera-based scanning workflows for expense entry.',
    role:
      'Contributed to user-facing mobile workflows across navigation, group management, profile flows, camera-scanning features, responsive UI components, and Firebase-backed app behavior.',
    contributions: [
      'Built and refined React Native screens for group management, profile management, and navigation flows.',
      'Implemented editable group settings and mobile UI components for repeated group workflows.',
      'Contributed to camera-scanning flows used by expense-related features.',
      'Integrated Firebase Authentication and Firestore-backed data access patterns.',
      'Added and maintained Jest and React Native Testing Library coverage for key UI and data workflows.',
    ],
    technicalTakeaways:
      'This project strengthened my experience building production-shaped mobile flows in a team codebase, connecting React Native screens to Firebase-backed state, and turning product requirements into testable app behavior.',
    projectProof: [
      {
        label: 'Mobile workflow surface',
        detail:
          'The app covers group creation/joining, bill entry, payments, profile management, balances, and camera-assisted expense workflows.',
      },
      {
        label: 'Backend integration',
        detail:
          'Authentication and shared expense data flows are backed by Firebase Authentication and Firestore.',
      },
      {
        label: 'Testing',
        detail:
          'UI and data-path behavior were tested with Jest and React Native Testing Library.',
      },
    ],
    sourceAvailabilityNote:
      'Source code available upon request where permitted.',
    visualVariant: 'mobile',
  },
  {
    title: 'UCSB Courses Search',
    slug: 'ucsb-courses-search',
    category: 'Full-Stack Web',
    featured: true,
    previewTitle: 'Course search web app',
    description:
      'Full-stack course search app with React, Spring Boot REST APIs, PostgreSQL-backed data, Dockerized workflows, and automated testing.',
    techStack: [
      'React',
      'TypeScript',
      'Java Spring Boot',
      'REST APIs',
      'PostgreSQL',
      'Docker',
      'Jest',
      'React Testing Library',
      'JUnit',
    ],
    highlights: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    projectFocus: [
      'Full-stack web development',
      'Course search workflows',
      'REST API integration',
      'Database-backed features',
      'Automated testing',
    ],
    overview:
      'UCSB Courses Search is a full-stack web application for searching and exploring course information through a React frontend, Java Spring Boot APIs, PostgreSQL-backed storage, Dockerized local development, and automated testing workflows.',
    role:
      'Built frontend components, connected course search and schedule-management features to API workflows, worked with database-backed functionality, and used Docker and testing tools during development.',
    contributions: [
      'Built React components for course search and schedule-management interactions.',
      'Integrated frontend workflows with REST APIs using client-side data fetching patterns.',
      'Worked with Spring Boot endpoints and PostgreSQL-backed course data.',
      'Used Docker-based development workflows to run the app consistently across environments.',
      'Worked with frontend and backend testing tools including Jest, React Testing Library, JUnit, and related coverage workflows.',
    ],
    technicalTakeaways:
      'This project helped connect frontend product behavior with backend API contracts, database-backed state, reproducible development environments, and testable full-stack workflows.',
    projectProof: [
      {
        label: 'Application architecture',
        detail:
          'React frontend, Spring Boot REST APIs, PostgreSQL-backed data, Dockerized development, and automated testing workflows.',
      },
      {
        label: 'User-facing workflows',
        detail:
          'Course search and schedule-management UI flows connect to backend API and database behavior.',
      },
      {
        label: 'Testing/build posture',
        detail:
          'Frontend and backend workflows use Jest, React Testing Library, JUnit, and Docker-based local setup patterns.',
      },
    ],
    sourceAvailabilityNote:
      'Source code available upon request where permitted.',
    visualVariant: 'search',
  },
  {
    title: 'Rendering Pipeline & Physics Simulation',
    slug: 'computer-graphics',
    category: 'Computer Graphics',
    featured: true,
    previewTitle: 'C++ rendering projects',
    description:
      'Built C++ rendering systems featuring rasterization, ray tracing, BVH acceleration, and mass-spring physics simulation.',
    techStack: [
      'C++',
      'Ray Tracing',
      'Rasterization',
      'BVH',
      'Physics Simulation',
    ],
    highlights: ['C++', 'Ray Tracing', 'Rasterization', 'BVH'],
    projectFocus: [
      'Computer graphics',
      'Rendering algorithms',
      'Geometric data structures',
      'Simulation',
      'Performance-aware C++',
    ],
    overview:
      'A collection of C++ graphics projects exploring rasterization, ray tracing, spatial acceleration, and physics-based simulation. The work includes a custom rendering pipeline, BVH-accelerated mesh intersection, and mass-spring systems implemented with Euler and Verlet integration.',
    role:
      'Implemented graphics algorithms and simulation behavior through custom C++ rendering and computation pipelines.',
    contributions: [
      'Implemented coordinate transformations, triangle rasterization, z-buffering, ray-triangle intersection, and bounding-box calculations in C++.',
      'Built ray-based mesh rendering with midpoint and surface-area-heuristic BVH construction to accelerate intersection testing.',
      'Simulated mass-spring systems using Euler and Verlet integration and rendered the results through a custom C++ graphics pipeline.',
    ],
    technicalTakeaways:
      'This work built stronger C++ skills and a deeper understanding of rendering algorithms, acceleration structures, geometric computation, and simulation tradeoffs.',
    projectProof: [
      {
        label: 'Rendering algorithms',
        detail:
          'Ray tracing, BVH acceleration, rasterization, z-buffering, coordinate transforms, and ray-triangle intersections.',
      },
      {
        label: 'Simulation work',
        detail:
          'Mass-spring systems use Euler and Verlet integration, with results rendered through a custom C++ graphics pipeline.',
      },
      {
        label: 'Visual evidence',
        detail:
          'The detail page supports a render gallery; screenshots can be added as cleaned outputs under public/images/projects/.',
      },
    ],
    sourceAvailabilityNote:
      'Implementation details available upon request where permitted.',
    visualVariant: 'graphics',
  },
  {
    title: 'Operating Systems Components',
    slug: 'operating-systems-components',
    category: 'Systems Programming',
    featured: false,
    previewTitle: 'Systems components',
    description:
      'Systems programming project suite covering shell behavior, user-level threading, copy-on-write memory, and filesystem concepts.',
    techStack: ['C', 'C++', 'POSIX', 'Signals', 'Threads', 'Filesystems'],
    highlights: ['C', 'POSIX', 'Threads', 'Filesystems'],
    projectFocus: [
      'Systems programming',
      'Process control',
      'Concurrency',
      'Memory behavior',
      'Filesystem abstractions',
    ],
    overview:
      'Operating Systems Components is a set of systems programming projects involving a Unix-style shell, user-level threading, thread-local storage with copy-on-write behavior, and filesystem-related abstractions.',
    role:
      'Implemented systems-level components focused on process control, command execution, scheduling, threading, memory behavior, and filesystem concepts.',
    contributions: [
      'Built shell behavior involving process creation, command execution, pipelines, redirection, and signal handling.',
      'Implemented user-level threading and scheduling behavior.',
      'Worked with thread-local storage and copy-on-write memory behavior.',
      'Built filesystem-related functionality through low-level systems programming.',
      'Debugged systems code involving processes, memory, threads, and filesystems.',
    ],
    technicalTakeaways:
      'This work developed stronger systems programming fundamentals across concurrency, memory management, process behavior, signal handling, and filesystem interfaces.',
    projectProof: [
      {
        label: 'Component coverage',
        detail:
          'Unix-style shell behavior, user-level threading, thread-local storage with copy-on-write behavior, and virtual filesystem concepts.',
      },
      {
        label: 'Systems concepts',
        detail:
          'Work spans process control, command execution, pipelines, redirection, signals, scheduling, memory behavior, and filesystem abstractions.',
      },
      {
        label: 'Architecture summary',
        detail:
          'The page presents implementation scope and design responsibilities without exposing reusable course solutions.',
      },
    ],
    sourceAvailabilityNote:
      'Implementation details available upon request where permitted.',
    visualVariant: 'systems',
  },
  {
    title: 'Network Congestion Study',
    slug: 'network-congestion-study',
    category: 'Networking',
    featured: false,
    previewTitle: 'TCP experiment',
    description:
      'Networking experiment analyzing TCP congestion behavior under controlled bottleneck, latency, queue, and traffic-shaping settings.',
    techStack: ['Python', 'Docker', 'Linux', 'Bash', 'TCP', 'Networking'],
    highlights: ['Python', 'Docker', 'TCP', 'Linux'],
    projectFocus: [
      'Computer networks',
      'TCP congestion control',
      'Queue tracing',
      'Experiment design',
      'Data analysis',
    ],
    overview:
      'Network Congestion Study investigates queue behavior under controlled network conditions, including bottleneck bandwidth, added latency, queueing policy, buffer size, and congestion-control settings. The project combines Linux networking tools, Docker-based workflows, queue traces, and Python analysis.',
    role:
      'Ran controlled networking experiments, collected queue and telemetry artifacts, generated plots, and analyzed transport-layer behavior under constrained network settings.',
    contributions: [
      'Ran experiments with controlled bandwidth, latency, queue policy, buffer size, and congestion-control settings.',
      'Used Linux networking tools and Docker-based infrastructure to create reproducible experiment environments.',
      'Collected queue traces and summarized queue occupancy over time.',
      'Generated plots and summaries with Python-based data processing.',
      'Interpreted how network conditions affected transport-layer performance and inference confidence.',
    ],
    technicalTakeaways:
      'This project strengthened my ability to design reproducible networking experiments, reason about TCP behavior from queue traces, and communicate the limits of inference when public-path conditions are uncontrolled.',
    projectProof: [
      {
        label: 'Experiment setup',
        detail:
          'Controlled bottleneck bandwidth, added latency, queue policy, buffer size, and congestion-control settings.',
      },
      {
        label: 'Technical artifacts',
        detail:
          'Queue traces, generated plots, experiment summaries, and Python analysis scripts are the intended public-facing artifacts.',
      },
      {
        label: 'Reproducibility focus',
        detail:
          'Docker/Linux networking workflows were used to capture and analyze queue behavior under repeatable settings.',
      },
    ],
    sourceAvailabilityNote:
      'Source code available upon request where permitted.',
    visualVariant: 'network',
  },
  {
    title: 'AI/ML Algorithms Projects',
    slug: 'ai-ml-algorithms',
    category: 'AI / Machine Learning',
    featured: false,
    previewTitle: 'AI/ML coursework',
    description:
      'Python-based AI and machine learning coursework covering search algorithms, heuristics, classification, feature processing, and analysis.',
    techStack: ['Python', 'NumPy', 'pandas', 'Search Algorithms', 'Classification'],
    highlights: ['Python', 'AI', 'Machine Learning', 'Search'],
    projectFocus: [
      'Artificial intelligence',
      'Machine learning fundamentals',
      'Search and heuristics',
      'Feature processing',
      'Algorithmic analysis',
    ],
    overview:
      'AI/ML Algorithms Projects summarizes coursework involving classical search algorithms, heuristic problem solving, classification workflows, feature processing, and Python-based analysis.',
    role:
      'Implemented and analyzed classical AI and machine learning algorithms in Python.',
    contributions: [
      'Implemented search and heuristic-based algorithms for problem-solving tasks.',
      'Worked with classification models and feature preprocessing.',
      'Used Python, NumPy, and pandas for data handling and analysis.',
      'Evaluated algorithm behavior and interpreted results across coursework tasks.',
    ],
    technicalTakeaways:
      'This work reinforced core AI problem-solving techniques, data preparation habits, and disciplined analysis of algorithm behavior.',
    projectProof: [
      {
        label: 'Algorithm coverage',
        detail:
          'Classical search, heuristic problem solving, classification, feature processing, and Python-based analysis.',
      },
      {
        label: 'Technical context',
        detail:
          'Included as a concise coursework summary rather than a public source-code showcase.',
      },
    ],
    sourceAvailabilityNote:
      'Implementation details available upon request where permitted.',
    visualVariant: 'ai',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
