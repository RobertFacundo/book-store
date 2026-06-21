import { ProductType } from "@/shared/data/products";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "@/shared/store/cart/useCart";
import { useState } from "react";
import { useAddToCart } from "../../hooks/useAddToCart";

type Props = {
    product: ProductType;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const AddToCartControls = ({ product, quantity, setQuantity }: Props) => {
    const { status, handleAddToCart } = useAddToCart(product, quantity);
        
    return (
        <div className="description-controls flex flex-col gap-6 items-center">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <button
                onClick={handleAddToCart}
                disabled={status !== "idle"}
                className="py-2 px-4 rounded-md bg-yellow-500/70 text-black w-[350px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-yellow-500 font-semibold tracking-wide text-xl"
            >
                {status === "idle" && "Add to Cart"}
                {status === "adding" && "Adding..."}
                {status === "added" && "Added ✓"}
            </button>
        </div>
    )
};

export default AddToCartControls;