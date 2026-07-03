// Site-wide profile and contact settings.
// Edit this file when your email, GitHub, LinkedIn, resume path, name, school,
// major, or location changes.

export const EMAIL = 'jackiechen246@gmail.com'
export const GITHUB_URL = 'https://github.com/jackiewchen'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jackiewchen'
export const RESUME_PATH = '/Jackie_Chen_Resume.pdf'

// Use empty strings for links that are not ready to show.
// Do not leave placeholder strings like LINKEDIN_URL_HERE on the live site.
export const profile = {
  name: 'Jackie Chen',
  school: 'University of California, Santa Barbara',
  major: 'Computer Science',
  location: 'San Francisco, CA',
  links: {
    github: GITHUB_URL,
    linkedin: LINKEDIN_URL,
    email: `mailto:${EMAIL}`,
    resume: RESUME_PATH,
  },
}

export function isRenderableLink(href: string | undefined): href is string {
  if (!href) {
    return false
  }

  return !href.includes('_HERE') && href !== '#'
}
