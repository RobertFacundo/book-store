import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { ProductType } from '@/shared/data/products';

export type CartItem = {
    product: ProductType;
    quantity: number;

}
type CartStore = {
    cart: CartItem[];

    addToCart: (
        product: ProductType,
        quantity: number
    ) => void;

    removeFromCart: (
        productId: number
    ) => void;

    updateQuantity: (
        productId: number,
        quantity: number
    ) => void;

    clearCart: () => void;
}

export const useCart = create<CartStore>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product, quantity) => {
                set((state) => {
                    const existingItem = state.cart.find(
                        item => item.product.id === product.id
                    );
                    if (existingItem) {
                        return {
                            cart: state.cart.map(item =>
                                item.product.id === product.id
                                    ? {
                                        ...item,
                                        quantity: item.quantity + quantity
                                    }
                                    : item
                            )
                        };
                    }
                    return {
                        cart: [
                            ...state.cart,
                            {
                                product,
                                quantity
                            }
                        ]
                    };
                });
            },
            removeFromCart: (productId) => {
                set((state) => ({
                    cart: state.cart.filter(
                        item => item.product.id !== productId
                    )
                }))
            },
            updateQuantity: (productId, quantity) => {
                set((state) => ({
                    cart: state.cart.map(item =>
                        item.product.id === productId
                            ? { ...item, quantity }
                            : item
                    )
                }));
            },
            clearCart: () => {
                set({
                    cart: []
                });
            }
        }),
        {
            name: 'cart-storage'

        }
    )
);