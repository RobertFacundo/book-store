const CartHeader = () => {
    return (
        <div className="grid grid-cols-[3fr_1fr_1fr] text-white/70 text-2xl">
            <div className="flex gap-6">
                <div className="w-20" />
                <h2>Product</h2>
            </div>

            <h2 className="text-center">Price</h2>
            <h2 className="text-center">Total</h2>
        </div>
    )
};

export default CartHeader;