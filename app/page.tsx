"use client"

import { useState, useEffect } from "react"
import { getProducts } from "@/components/lib/requests"
import ProductCard from "@/components/product-card"
import ProductCardSkeleton from "@/components/skeletons/product-card-skeleton"
import { IProducts } from "@/types"

export default function Home() {
  const [models, setModels] = useState<IProducts[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts()
        setModels(products)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1 className="text-8xl text-center font-semibold">Magica</h1>
      <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 md:py-10 md:px-6">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : models.map((model) => (
              <ProductCard key={model.uuid} model={model} />
            ))}
      </section>
    </>
  )
}
