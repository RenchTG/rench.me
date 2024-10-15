export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
  external: boolean
}

export const SITE: Site = {
  TITLE: 'Philip Dobranowski',
  DESCRIPTION:
    "Philip Dobranowski's personal website and blog. Home to security and software tomfoolery.",
  EMAIL: 'philip@rench.me',
  NUM_POSTS_ON_HOMEPAGE: 4,
  POSTS_PER_PAGE: 20,
  SITEURL: 'https://rench.me',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home', external: false },
  { href: '/about', label: 'about', external: false },
  { href: '/blog', label: 'blog', external: false },
  { href: 'https://drive.google.com/file/d/17pWDOVYT3xJjryri4AMpAKr44AtB8gp1/view?usp=sharing', label: 'resume', external: true },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/RenchTG', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/philip-dobranowski', label: 'LinkedIn', external: true },
  { href: 'philip@rench.me', label: 'Email', external: true },
  { href: 'https://twitter.com/RenchTG', label: 'Twitter', external: true },
  { href: '/rss.xml', label: 'RSS', external: true },
]
