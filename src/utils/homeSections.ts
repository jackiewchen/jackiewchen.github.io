export type HomeSectionId =
  | 'home'
  | 'featured'
  | 'experience'
  | 'skills'
  | 'contact'

export type HomeSection = {
  sectionId: HomeSectionId
  path: string
}

export const homeSections: HomeSection[] = [
  { sectionId: 'home', path: '/' },
  { sectionId: 'featured', path: '/featured' },
  { sectionId: 'experience', path: '/experience' },
  { sectionId: 'skills', path: '/skills' },
  { sectionId: 'contact', path: '/contact' },
]

export const homeSectionPaths = homeSections.map((section) => section.path)

export function getHomeSectionId(pathname: string): HomeSectionId {
  return (
    homeSections.find((section) => section.path === pathname)?.sectionId ??
    'home'
  )
}

export function getHomeSectionPath(sectionId: HomeSectionId): string {
  return (
    homeSections.find((section) => section.sectionId === sectionId)?.path ?? '/'
  )
}
