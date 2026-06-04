"use client"

import ProductCard from "./ProductCard";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";
import Pagination from "./Pagination";
import ProductGridSkeleton from "@/shared/components/ui/ProductGridSkeleton";
import { useProductGrid } from "../../hooks/useProductGrid";

const ProductGrid = () => {
    const {
        page,
        setPage,
        data,
        isLoading,
        totalPages,
    } = useProductGrid();

    return (
        <div className="flex flex-col gap-6">
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
            {isLoading ? (
                <ProductGridSkeleton />
            ) : (
                <GridLayoutContainer className="grid-cols-2">
                    {data?.products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </GridLayoutContainer>
            )}
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    )
};

export default ProductGrid;