import { useState } from "react"

type SeeMoreProps = {
  text: string
  limit?: number
}

export default function SeeMore({ text, limit = 230 }: SeeMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <p className="text-muted-foreground text-justify font-light">
      {isExpanded ? text : text.substring(0, limit)}
      ...
      <button
        className="underline"
        color="primary"
        onClick={handleToggleExpand}
      >
        {isExpanded ? "See less" : "See more"}
      </button>
    </p>
  )
}
