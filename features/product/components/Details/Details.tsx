import { ProductType } from "@/shared/data/products";
import Background from "./Background";
import Gallery from "./Gallery";
import Description from "./Description";
import { useRef } from "react";
import { useProductDetailAnimations } from "../../animations/useProductDetailAnimations";

type DetailsProps = {
    product: ProductType
}

const Details = ({ product }: DetailsProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useProductDetailAnimations(ref)
    return (
        <div className="relative min-h-screen w-full bg-black">
            <Background />
            <div ref={ref} className="relative z-10 grid lg:grid-cols-2 grid-cols-1 min-h-screen">
                <div className="gallery-section flex items-center justify-center">
                    <Gallery />
                </div>
                <div className="description-section flex items-center ">
                    <Description product={product} />
                </div>
            </div>
        </div>
    )
};

export default Details;