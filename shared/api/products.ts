import { products, ProductType } from "../data/products";

export const getProducts = async (page: number, pageSize: number, categories: string[]): Promise<ProductType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = categories.length === 0 ? products : products.filter(product => categories.includes(product.category))
            const start = (page - 1) * pageSize;
            const end = start + pageSize;

            resolve(filteredProducts.slice(start, end));
        }, 500)
    })
};