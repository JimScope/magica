import { SiteConfig } from "types"

export const siteConfig: SiteConfig = {
  name: "Magica",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "https://tx.shadcn.com",
  ogImage: "https://tx.shadcn.com/og.jpg",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
    docs: "https://ui.shadcn.com",
  },
}
