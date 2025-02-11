"use client"

import * as React from "react"
import { HeroUIProvider } from "@heroui/system"
import { useRouter } from "next/navigation"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

import Scene from "@/components/canvas/scene"

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter()

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <Scene />
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}
