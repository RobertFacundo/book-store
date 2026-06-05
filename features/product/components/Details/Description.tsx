import Stars from "@/features/home/components/bestSellers/Stars";
import { ProductType } from "@/shared/data/products";
import { BookOpenText } from 'lucide-react';
import { Calendar } from 'lucide-react';
import StatItem from "./StatItem";
import AddToCartControls from "./AddToCartControls";

type DescriptionProps = {
    product: ProductType
}

const Description = ({ product }: DescriptionProps) => {
    const { title, author, category, rating, quote, pageCount, year, price } = product;
    return (
        <div className="w-full flex flex-col gap-8 lg:ml-5 p-5 items-center text-center">
            <span className="text-white/70 font-[family-name:var(--font-ui)] text-sm font-light">{category.toUpperCase()}</span>
            <div className="flex flex-col gap-1">
                <h1 className="text-yellow-500 lg:text-5xl text-4xl font-bold tracking-wide">{title}</h1>
                <h2 className="text-white/70 font-bold">{author}</h2>
            </div>
            <div className="flex gap-2 text-white/30 text-[13px] items-center">
                <Stars rating={rating} /> {rating}
            </div>
            <div className="p-4 bg-zinc-700/30 border border-white/30 w-fit rounded-md">
                <h1 className="text-yellow-500/70 font-[family-name:var(--font-display)] text-3xl">" {quote} "</h1>
            </div>
            <div className="flex flex-row font-bold gap-4 border-b border-white/10 text-white/70 tracking-wide w-fit px-4 py-1 pb-3">

                <StatItem
                    icon={<BookOpenText size={35} />}
                    label="Page Count"
                    value={pageCount}
                />

                <StatItem
                    icon={<Calendar size={35} />}
                    label="Publish year"
                    value={year}
                />

            </div>
            <div className="text-yellow-500/90 text-5xl font-regular">
                ${price}
            </div>
            <AddToCartControls />
        </div>
    )
};

export default Description;