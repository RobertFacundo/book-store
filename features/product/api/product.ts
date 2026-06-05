import { products, ProductType } from "@/shared/data/products"

export const getProductById = async (id: number): Promise<ProductType> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id === id);

            if (!product) {
                reject(new Error("Product not found"));
                return;
            }

            resolve(product)
        }, 500);
    })
}