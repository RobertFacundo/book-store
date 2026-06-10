import { ProductType } from "@/shared/data/products";
import { useCart } from "@/shared/store/cart/useCart";
import { useState } from "react";

export const useAddToCart = (product: ProductType, quantity: number) => {
    const addToCart = useCart(state => state.addToCart);
    const [status, setStatus] = useState<"idle" | "adding" | "added">("idle");

    const handleAddToCart = () => {
        setStatus("adding");

        setTimeout(() => {
            addToCart(product, quantity);
            setStatus("added");

            setTimeout(() => {
                setStatus("idle");
            }, 1200);
        }, 400);
    };

    return {
        status,
        handleAddToCart
    };
};