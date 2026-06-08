import ItemCard from "./ItemCard";
import { useCart } from "@/shared/store/cart/useCart";

const ItemGrid = () => {
  const cart = useCart((state)=>state.cart)
    return (
        <div>
            {cart.map(item =>(
                <ItemCard key={item.product.id} item={item}/>
            ))}
        </div>
    )
};

export default ItemGrid;