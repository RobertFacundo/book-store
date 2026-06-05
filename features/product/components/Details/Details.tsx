import { ProductType } from "@/shared/data/products";
import Background from "./Background";
import Gallery from "./Gallery";
import Description from "./Description";

type DetailsProps = {
    product: ProductType
}

const Details = ({ product }: DetailsProps) => {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <Background />
            <div className="relative z-10 grid lg:grid-cols-2 grid-cols-1 min-h-screen">
                <div className="flex items-center justify-center">
                    <Gallery />
                </div>
                <div className="flex items-center ">
                    <Description  product={product}/>
                </div>
            </div>
        </div>
    )
};

export default Details;