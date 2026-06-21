import { useCart } from "@/shared/store/cart/useCart";

const Summary = () => {
    const cart = useCart((state) => state.cart);
    const subtotal = cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity, 0
    )
    return (
        <div className="summary-panel flex flex-col gap-6 bg-zinc-900/50 backdrop-blur-xl text-white rounded-md p-6 border border-white/10 w-full">
            <h1 className="summary-title text-3xl font-semibold">
                Order Summary
            </h1>

            <div className="summary-details flex flex-col gap-4 border-b border-white/10 pb-5">
                <div className="flex justify-between">
                    <p className="text-white/50">Subtotal</p>
                    <span>${subtotal}</span>
                </div>

                <div className="flex justify-between">
                    <p className="text-white/50">Delivery</p>
                    <span>Free</span>
                </div>

                <div className="flex justify-between">
                    <p className="text-white/50">Taxes</p>
                    <span>$0</span>
                </div>
            </div>

            <div className="summary-total flex justify-between items-center">
                <p className="text-white/70 text-lg">
                    Total
                </p>

                <span className="text-yellow-500 text-4xl font-bold">
                    ${subtotal.toFixed(2)}
                </span>
            </div>

            <button className="summary-button w-full py-3 rounded-md bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all tracking-wider text-xl cursor-pointer">
                Proceed to Checkout
            </button>
        </div>
    )
};

export default Summary;