import { ProductType } from "@/shared/data/products";
import Synopsis from "./Synopsis";
import Author from "./Author";
import { useRef } from "react";
import { useContentAnimation } from "../../animations/useContentAnimation";

type ContentProps = {
    product: ProductType
}

const Content = ({ product }: ContentProps) => {
    const { author, synopsis } = product;
    const ref = useRef<HTMLDivElement>(null);
    useContentAnimation(ref)
    return (
        <div className="w-full p-10 bg-black">
            <div ref={ref} className="flex lg:flex-row flex-col rounded-md bg-zinc-900/70 gap-12 p-10">
                <div className="lg:w-3/5 lg:border-r lg:border-b-0 border-r-0 border-b border-yellow-500/20">
                    <Synopsis synopsis={synopsis} />
                </div>
                <div className="lg:w-2/5">
                    <Author author={author} />
                </div>
            </div>
        </div>
    )
};

export default Content;