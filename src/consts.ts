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
  external?: boolean
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
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'blog' },
  { href: 'https://drive.google.com/file/d/17pWDOVYT3xJjryri4AMpAKr44AtB8gp1/view?usp=sharing', label: 'resume', external: true },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/RenchTG', label: 'GitHub' },
  { href: 'https://linkedin.com/in/philip-dobranowski', label: 'LinkedIn' },
  { href: 'philip@rench.me', label: 'Email' },
  { href: 'https://twitter.com/RenchTG', label: 'Twitter' },
  { href: '/rss.xml', label: 'RSS' },
]
