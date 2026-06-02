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
            <Image src={image} alt={title} className="h-[250px] w-[230px]  sm:h-[450px] md:h-[300px] lg:h-[230px] lg:w-[250px] px-3 py-1 lg:w-full" />
            <div className="flex flex-col px-2 pb-2 gap-1 flex-1">
                <div className="flex min-h-[31px] items-center">
                    <h3 className="text-xl text-yellow-500 font-semibold">{title}</h3>
                </div>
                <p className="font-light text-lg text-zinc-300/70 font-[family-name:var(--font-display)] tracking-widest">{author}</p>
                <Stars rating={rating} />
                <p className="text-white text-sm">${price}</p>
            </div>
        </div>
    )
};

export default ProductCard;