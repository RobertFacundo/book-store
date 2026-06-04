"use client";

import { useEffect, useMemo, useState } from "react";
import { useFiltersStore } from "@/shared/store/filters/useFiltersStore";
import { useProducts } from "@/shared/hooks/useProducts";

export const useProductGrid = () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const categories = useFiltersStore((state) => state.categories);
    const maxPrice = useFiltersStore((state) => state.maxPrice);

    const sortedCategories = useMemo(() => {
        return [...categories].sort();
    }, [categories]);

    const { data, isLoading } = useProducts(
        page,
        pageSize,
        sortedCategories,
        maxPrice
    );

    const totalPages = data
        ? Math.ceil(data.total / pageSize)
        : 1;

    useEffect(() => {
        setPage(1);
    }, [categories, maxPrice]);

    return {
        page,
        setPage,
        data,
        isLoading,
        totalPages,
    };
};