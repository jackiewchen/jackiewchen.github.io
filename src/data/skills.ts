export type SkillGroup = {
  label: string
  skills: string[]
}

// Edit these groups to update the Skills section on the homepage.
export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C/C++', 'Swift', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Frontend/Mobile',
    skills: ['React', 'React Native', 'Expo', 'React Navigation', 'React Query', 'Axios', 'Storybook'],
  },
  {
    label: 'APIs/Cloud/Data',
    skills: ['REST APIs', 'Firebase Auth', 'Firestore', 'Spring Boot', 'Node.js', 'PostgreSQL'],
  },
  {
    label: 'Tools/Testing',
    skills: ['Git/GitHub', 'Docker', 'GitHub Actions', 'Jest', 'JUnit', 'React Testing Library'],
  },
]

// Edit this list to update the Relevant Coursework card.
export const relevantCoursework = [
  'Data Structures & Algorithms',
  'Software Engineering',
  'Mobile App Development',
  'Databases',
  'Operating Systems',
  'Computer Networks',
  'Computer Architecture',
  'Computer Graphics',
  'Artificial Intelligence / Machine Learning',
  'Human-Computer Interaction',
]
