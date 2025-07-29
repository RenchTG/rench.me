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
  EMAIL: 'contact@philipdobranowski.com',
  NUM_POSTS_ON_HOMEPAGE: 4,
  POSTS_PER_PAGE: 20,
  SITEURL: 'https://philipdobranowski.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'blog' },
  { href: 'https://drive.google.com/file/d/1lDFpSSpmE0MSJ7Sc00rGXD0Fr8IaIP4h/view?usp=sharing', label: 'resume', external: true },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/RenchTG', label: 'GitHub' },
  { href: 'https://linkedin.com/in/philip-dobranowski', label: 'LinkedIn' },
  { href: 'contact@philipdobranowski.com', label: 'Email' },
  { href: 'https://twitter.com/RenchTG', label: 'Twitter' },
  { href: '/rss.xml', label: 'RSS' },
]
