"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { View } from "@react-three/drei";

import { _models } from "@/_mock/models";

const Model = dynamic(() => import("@/components/canvas/render-component"), {
  ssr: false,
});

const ProductDetail = () => {
  const { id } = useParams();
  const product = _models.find((model) => model.uuid === id);

  if (!id) return <div>Loading...</div>;

  return (
    <>
      <div>Product Details for {product?.name}</div>
      <View>
        <Model />
      </View>
    </>
  );
};

export default ProductDetail;
