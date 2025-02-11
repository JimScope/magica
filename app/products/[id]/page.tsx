"use client"

import { useParams, useRouter } from "next/navigation"
import { Button, Skeleton } from "@heroui/react"
import { View } from "@react-three/drei"

import CategoriesChips from "@/components/categories-chips"
import StatsCard from "@/components/stats-card"
import SeeMore from "@/components/see-more"
import Model from "@/components/canvas/render-component"
import { getProduct } from "@/components/lib/requests"
import { useEffect, useState } from "react"
import { IProduct } from "@/types"
import { Loading } from "@/components/canvas/loading"

const ProductDetail = () => {
  const { id } = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = Array.isArray(id) ? id[0] : id
        const data = await getProduct(productId)
        if (data) {
          setProduct(data)
        } else {
          setError("Product not found")
        }
      } catch (err) {
        setError("Error fetching product")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <Loading />
  if (product === null) {
    return <div>{error}</div>
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4">
      <Button
        variant="bordered"
        className="self-start mb-4"
        onPress={() => router.push(`/`)}
      >
        Back
      </Button>
      <div className="flex flex-col items-center justify-center w-full max-w-4xl md:flex-row md:items-start md:gap-8">
        <div className="w-full max-w-lg">
          <View className="h-96">
            <Model model_url={`/${product.gltf}`} />
          </View>
          <div className="flex gap-2 mb-4">
            <button>
              <Skeleton className="w-20 h-20 rounded-md object-cover" />
            </button>
            <button>
              <Skeleton className="w-20 h-20 rounded-md object-cover" />
            </button>
            <button>
              <Skeleton className="w-20 h-20 rounded-md object-cover" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start w-full max-w-lg space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex flex-wrap gap-2">
            <CategoriesChips categories={product.categories} />
          </div>
          <SeeMore text={product.details} />
          <StatsCard />
          <div className="flex gap-4">
            <Button className="w-full md:w-auto">Download</Button>
            <Button variant="flat" className="w-full md:w-auto">
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
