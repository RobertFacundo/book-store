import SectionLayout from "@/shared/components/layout/SectionLayout";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";


const ProductsSection = () => {
    return (
        <SectionLayout className="md:px-4 pb-10">
            <Filters />
            <ProductGrid />
        </SectionLayout>
    )
};

export default ProductsSection;