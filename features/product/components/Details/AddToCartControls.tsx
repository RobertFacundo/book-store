import { ProductType } from "@/shared/data/products";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "@/shared/store/cart/useCart";

type Props = {
    product: ProductType;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const AddToCartControls = ({ product, quantity, setQuantity }: Props) => {
    const addToCart = useCart(state => state.addToCart);

    return (
        <div className="flex flex-col gap-6 items-center">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => addToCart(product, quantity)} className="py-2 px-4 rounded-md bg-yellow-500/70 text-black w-[350px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-yellow-500 font-semibold tracking-wide text-xl">
                Add to Cart
            </button>
        </div>
    )
};

export default AddToCartControls;