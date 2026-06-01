import ProductCard from "./ProductCard";
import { products } from "@/shared/data/products";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";

const ProductGrid = () => {
    return (
        <GridLayoutContainer>
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </GridLayoutContainer>
    )
};

export default ProductGrid;