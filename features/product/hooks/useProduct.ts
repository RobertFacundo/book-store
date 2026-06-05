"use client"

import { useQuery } from "@tanstack/react-query"
import { getProductById } from "../api/product"
import { ProductType } from "@/shared/data/products"

export const useProduct = (id: number) => {
    return useQuery<ProductType>({
        queryKey: ["product", id],
        queryFn: () => getProductById(id)
    })
}