export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Philip Dobranowski',
  DESCRIPTION:
    "Philip Dobranowski's personal website and blog. Home to security and software tomfoolery.",
  EMAIL: 'philip@rench.me',
  NUM_POSTS_ON_HOMEPAGE: 4,
  SITEURL: 'https://rench.me',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/RenchTG', label: 'GitHub' },
  { href: 'https://linkedin.com/in/philip-dobranowski', label: 'LinkedIn' },
  { href: 'philip@rench.me', label: 'Email' },
  { href: 'https://twitter.com/RenchTG', label: 'Twitter' },
  { href: '/rss.xml', label: 'RSS' },
]
