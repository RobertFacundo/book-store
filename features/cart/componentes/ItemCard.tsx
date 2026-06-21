import { CartItem } from "@/shared/store/cart/useCart";
import Stars from '@/features/home/components/bestSellers/Stars'
import Image from "next/image";
import QuantitySelector from "@/features/product/components/Details/QuantitySelector";
import { TrashIcon } from "lucide-react";
import { useCart } from "@/shared/store/cart/useCart";
import { useRef } from "react";
import gsap from "gsap";
import { useAnimateRemoveCardItem } from "../animations/useAnimateRemoteCardItem";

type ItemCardProps = {
    item: CartItem;
}

const ItemCard = ({ item }: ItemCardProps) => {
    const { category, title, image, author, rating, price, id } = item.product;
    const cardRef = useRef<HTMLDivElement>(null)
    const quantity = item.quantity
    const totalPrice = price * quantity;

    const updateQuantity = useCart(state => state.updateQuantity)
    const removeFromCart = useCart(state => state.removeFromCart);

    const handleRemove = () => {
        if (!cardRef.current) return;

        useAnimateRemoveCardItem(cardRef.current, () => {
            removeFromCart(id);
        })
    };

    const handleQuantityChange = (
        quantity: number
    ) => {
        updateQuantity(id, quantity);
    };

    return (
        <div ref={cardRef}
            className="grid grid-cols-[3fr_1fr_1fr] border-b border-white/10 py-2">
            <div className="flex lg:flex-row flex-col gap-6">
                <Image src={image} alt={title} className="h-40 w-30" />
                <div className="flex flex-col gap-2 justify-center text-white">
                    <h1 className="text-3xl font-[family-name:var(--font-display)] tracking-wider">{title}</h1>
                    <p className="tracking-wide text-white/50">{author}</p>
                    <span className="tracking-wide text-white/20 text-sm">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    <Stars rating={rating} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-around text-white">
                <p className="text-white text-xl">{price.toFixed(2)}</p>
                <QuantitySelector quantity={quantity} setQuantity={handleQuantityChange} />
            </div>
            <div className="flex flex-col items-center justify-around">
                <p className="text-white text-xl">{totalPrice.toFixed(2)}</p>
                <button
                    onClick={handleRemove}
                    aria-label="Remove item"
                    className="text-yellow-500/70 cursor-pointer transition-all ease-in-out duration-300 hover:text-yellow-500"
                >
                    <TrashIcon size={25} />
                </button>
            </div>

        </div>
    )
};

export default ItemCard;