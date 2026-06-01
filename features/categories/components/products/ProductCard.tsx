import { ProductType } from "@/shared/data/products";
import Image from "next/image";
import Stars from "@/features/home/components/bestSellers/Stars";

type ProductCardProps = {
    product: ProductType
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { image, title, price, author, rating } = product;
    return (
        <div className="flex flex-col gap-1 rounded-md bg-zinc-700/20 border border-white/10 transition-all ease-in-out duration-500 hover:scale-105" >
            <Image src={image} alt={title} className="h-[500px] sm:h-[450px] md:h-[300px] lg:h-[330px]  px-4 py-2 w-full" />
            <div className="flex flex-col px-3 pb-3 gap-2 flex-1">
                <div className="flex min-h-[71px] items-center">
                    <h3 className="text-3xl text-yellow-500 font-semibold">{title}</h3>
                </div>
                <p className="font-light text-xl text-zinc-300/70 font-[family-name:var(--font-display)] tracking-widest">{author}</p>
                <Stars rating={rating} />
                <p className="text-white text-lg">${price}</p>
            </div>
        </div>
    )
};

export default ProductCard;