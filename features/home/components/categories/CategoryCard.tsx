import { categoryType } from "@/shared/data/Categories";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type CategoryCardProps = {
    item: categoryType
}

const CategoryCard = ({ item }: CategoryCardProps) => {
    const { icon: Icon, title, image } = item;
    return (
        <div className="relative h-[270px] group overflow-hidden rounded-lg">
            <Image src={image} alt={title} fill className="object-cover transition-transform ease-in-out duration-500 group-hover:scale-105 " />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
            <div className="absolute left-0 bottom-0 z-50 flex flex-col gap-4  p-3">
                <Icon size={40} strokeWidth={1.2} className="text-yellow-500/80" />
                <div className="flex flex-row text-white items-center gap-1 hover:scale-105 hover:text-yellow-500 transition-all ease-in-out duration-600">
                    <h3 className="cursor-pointer text-2xl font-semibold tracking-widest">{title}</h3>
                    <ArrowRight size={16} />
                </div>
            </div>
        </div>
    )
};

export default CategoryCard;