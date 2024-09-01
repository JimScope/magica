import React from "react"
import { Chip } from "@nextui-org/react"

type CategoriesChipsProps = {
  categories: string[]
}

export default function CategoriesChips({ categories }: CategoriesChipsProps) {
  return (
    <div className="flex gap-2">
      {categories.map((fruit, index) => (
        <Chip key={index} variant="flat">
          {fruit}
        </Chip>
      ))}
    </div>
  )
}
