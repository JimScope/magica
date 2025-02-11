import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type IProductBasic = {
  uuid: string
  name: string
  categories: string[]
  price: number
  img: string
}

export type IProduct = IProductBasic & {
  details: string
  vox?: string
  gltf?: string
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  mainNav: MainNavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}
