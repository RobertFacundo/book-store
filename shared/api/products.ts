import { products, ProductType } from "../data/products";

export const getProducts = async (page: number, pageSize: number): Promise<ProductType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const start = (page - 1) * pageSize;
            const end = start + pageSize;

            resolve(products.slice(start, end));
        }, 500)
    })
};