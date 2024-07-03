"use client";

import { Card, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { IProducts } from "@/types";

interface ProductCardProps {
  model: IProducts;
}

export default function ProductCard({ model }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card
      key={model.uuid}
      isFooterBlurred
      isPressable
      className="border-none size-fit"
      radius="lg"
      onPress={() => router.push(`/products/${model.uuid}`)}
    >
      <Image
        alt="Woman listening to music"
        className="object-cover"
        src="https://nextui.org/images/hero-card.jpeg"
      />
      <CardFooter className="justify-around">
        <p className="text-large dark:text-white">{model.name}</p>
        {model.price === 0 ? "Free" : `${model.price} $`}
      </CardFooter>
    </Card>
  );
}
