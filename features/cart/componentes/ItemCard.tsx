import { CartItem } from "@/shared/store/cart/useCart";


type ItemCardProps = {
    item: CartItem;
}

const ItemCard = ({ item }: ItemCardProps) => {
    return (
        <div>
            <h2>{item.product.title}</h2>
            <p>qty:{item.quantity}</p>
        </div>
    )
};

export default ItemCard;