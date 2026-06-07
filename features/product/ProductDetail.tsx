"use client"

import Banner from "@/shared/components/banner/Banner";
import BestSellersSection from "../home/components/bestSellers/BestSellersSection";
import Content from "./components/Content/Content";
import Details from "./components/Details/Details";
import { useProduct } from "./hooks/useProduct";
import { shippingBannerItems } from "@/shared/data/BannerItems";

const ProductDetail = ({productId}:{productId:string}) => {
    const id = Number(productId)
    const {data:product, isLoading} = useProduct(id);

    if(isLoading){
        return <p>Is loading</p>
    }
    if(!product){
        return <p>Product not found</p>
    }

    console.log(product);

    return (
        <>
            <Details product={product} />
            <Content product={product} />
            <Banner items={shippingBannerItems}/>
            <BestSellersSection title="You may also like"/>
        </>
    )
};

export default ProductDetail;