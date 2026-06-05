"use client"

import Content from "./components/Content/Content";
import Details from "./components/Details/Details";
import { useProduct } from "./hooks/useProduct";

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
        </>
    )
};

export default ProductDetail;