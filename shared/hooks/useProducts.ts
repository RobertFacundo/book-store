"use client"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/shared/api/products";
import { ProductType } from "../data/products";

export const useProducts = (page: number, pageSize: number) => {
    return useQuery<ProductType[]>({
        queryKey: ["products", page],
        queryFn: () => getProducts(page, pageSize),
    });
}