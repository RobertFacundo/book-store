import { useCart } from "@/shared/store/cart/useCart";

const Summary = () => {
    const cart = useCart((state) => state.cart);
    const subtotal = cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity, 0
    )
    return (
        <div>
            <h2>subtotal: ${subtotal}</h2>
        </div>
    )
};

export default Summary;