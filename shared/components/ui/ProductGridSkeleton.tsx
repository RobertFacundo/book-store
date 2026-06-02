import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGridSkeleton = () => {
  return (
    <GridLayoutContainer className="grid-cols-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </GridLayoutContainer>
  );
};

export default ProductGridSkeleton;