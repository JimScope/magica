"use client";

import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { IProduct } from "@/types";

interface ProductCardProps {
  model: IProduct;
}

export default function ProductCard({ model }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card
      key={model.uuid}
      isFooterBlurred
      isPressable
      className="border-none"
      radius="lg"
      onPress={() => router.push(`/products/${model.uuid}`)}
    >
      <Image
        alt="Woman listening to music"
        className="object-cover"
        src="https://nextui.org/images/hero-card.jpeg"
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-medium text-white">{model.name}</p>
        {/*         <Button
          className="text-medium text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
          onPress={() => router.push(`/products/${model.uuid}`)}
        >
          {model.price}
        </Button> */}
        {model.price}
      </CardFooter>
    </Card>
  );
}
