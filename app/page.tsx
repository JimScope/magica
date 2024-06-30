"use client";

import { _models } from "@/_mock/models";
import ProductCard from "@/components/product-card";

export default function Home() {
  return (
    <section className="container m-auto grid grid-cols-4 gap-8 justify-center py-8 md:py-10">
      {_models.map((model) => (
        <ProductCard key={model.uuid} {...{ model }} />
      ))}
    </section>
  );
}
