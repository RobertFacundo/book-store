"use client"

import { useCart } from "@/shared/store/cart/useCart";
import Summary from "./componentes/Summary";
import ItemGrid from "./componentes/ItemGrid";

const Cart = () => {
    return (
        <div className="flex flex-row flex-col gap-3 w-full">
            <div className="w-3/5">
                <Summary />
            </div>
            <div className="w-2/5">
                <ItemGrid />
            </div>
        </div>
    )
};

export default Cart;