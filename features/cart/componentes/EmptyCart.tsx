import { ShoppingCart } from "lucide-react";

const EmptyCart = () => {
    return (
        <div className="min-h-[80vh] mt-16 flex flex-col items-center justify-center gap-4 bg-zinc-900/50 backdrop-blur-xl ">
            <ShoppingCart
                size={80}
                className="text-yellow-500/40"
            />

            <h2 className="text-3xl text-white">
                Your cart is empty
            </h2>

            <p className="text-white/50">
                Add some books to get started.
            </p>
        </div>
    )
};

export default EmptyCart;