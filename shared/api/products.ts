import { products, ProductType } from "../data/products";

export type GetProductsResponse = {
    products: ProductType[];
    total: number;
};

export const getProducts = async (page: number, pageSize: number, sortedCategories: string[], maxPrice: number): Promise<GetProductsResponse> => {
    console.log("FILTERING:", { sortedCategories, maxPrice });
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products
                .filter(product => sortedCategories.length === 0 || sortedCategories.includes(product.category))
                .filter(product => product.price <= maxPrice);

            const start = (page - 1) * pageSize;
            const end = start + pageSize;

            resolve({ products: filteredProducts.slice(start, end), total: filteredProducts.length });
        }, 500)
    })
};