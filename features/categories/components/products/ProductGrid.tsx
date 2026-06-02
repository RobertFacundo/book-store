"use client"

import { useState } from "react";
import { useProducts } from "@/shared/hooks/useProducts";
import ProductCard from "./ProductCard";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";
import Pagination from "./Pagination";
import ProductGridSkeleton from "@/shared/components/ui/ProductGridSkeleton";

const ProductGrid = () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const { data: products, isLoading } = useProducts(page, pageSize);

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