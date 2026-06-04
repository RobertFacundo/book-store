"use client"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/shared/api/products";
import { ProductType } from "../data/products";
import { keepPreviousData } from "@tanstack/react-query";

type ProductsResponse = {
    products: ProductType[];
    total: number;
};


export const useProducts = (page: number, pageSize: number, sortedCategories: string[], maxPrice: number) => {
    return useQuery<ProductsResponse>({
        queryKey: ["products", page, sortedCategories, maxPrice],
        queryFn: () => getProducts(page, pageSize, sortedCategories, maxPrice),
        placeholderData: keepPreviousData
    });
}