"use client"

import { useState, useEffect } from "react";
import { useProducts } from "@/shared/hooks/useProducts";
import ProductCard from "./ProductCard";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";
import Pagination from "./Pagination";
import ProductGridSkeleton from "@/shared/components/ui/ProductGridSkeleton";
import { useFiltersStore } from "@/shared/store/filters/useFiltersStore";

const ProductGrid = () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const categories = useFiltersStore((state) => state.categories)
    const { data: products, isLoading } = useProducts(page, pageSize, categories);

    useEffect(() => {
        setPage(1);
    }, [categories]);

    return (
        <div className="flex flex-col gap-6">

            {isLoading ? (
                <ProductGridSkeleton />
            ) : (
                <GridLayoutContainer className="grid-cols-2">
                    {products?.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </GridLayoutContainer>
            )}
            <Pagination page={page} setPage={setPage} />
        </div>
    )
};

export default ProductGrid;