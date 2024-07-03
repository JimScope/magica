import { IProducts, IProduct } from "@/types";
import { cache } from "react";

const getProducts = cache(async (): Promise<IProducts[]> => {
  try {
    const res = await fetch(`http://localhost:3001/products`);
    const data = await res.json();
    return data.data as IProducts[];
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return [];
  }
});

const getProduct = cache(async (product: string): Promise<IProduct | null> => {
  try {
    const res = await fetch(`http://localhost:3001/product/${product}`);
    const data = await res.json();
    return data.data as IProduct;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return null;
  }
});

export { getProducts, getProduct };
