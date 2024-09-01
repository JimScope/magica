import { Card, CardFooter, Skeleton } from "@nextui-org/react"

export default function ProductCardSkeleton() {
  return (
    <Card className="size-fit space-y-2" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[250] w-[250] rounded-lg bg-default-300"></div>
      </Skeleton>
      <CardFooter className="justify-around">
        <Skeleton className="w-2/4 rounded-lg">
          <div className="h-6 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-1/4  rounded-lg">
          <div className="h-6 rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardFooter>
    </Card>
  )
}
