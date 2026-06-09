import TitleSection from "@/shared/components/titles/TitleSection";
import ItemCard from "./ItemCard";
import { useCart } from "@/shared/store/cart/useCart";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";

const ItemGrid = () => {
    const cart = useCart((state) => state.cart);

    if (cart.length === 0) {
        return <EmptyCart />
    }

    return (
        <div className="flex flex-col">
            <TitleSection title="Your cart" />
            <div className="bg-zinc-900/50 rounded-md p-5 mt-5 border border-gray-500/10 backdrop-blur-lg max-h-[80vh] ">
                <div className="p-2 border-b border-white/10 mb-2">
                    <CartHeader />
                </div>


                <div className="max-h-[60vh] overflow-y-auto p-5">
                    {cart.map(item => (
                        <ItemCard key={item.product.id} item={item} />
                    ))}
                </div>

            </div>
        </div>
    )
};

export default ItemGrid;