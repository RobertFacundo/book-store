import HeroCategoriesSection from "./components/hero/HeroCategoriesSection";
import ProductsSection from "./components/products/ProductsSection";
import { shippingBannerItems } from '@/shared/data/BannerItems';
import Banner from '@/shared/components/banner/Banner';

const Categories = () => {
    return (
        <>
            <HeroCategoriesSection />
            <ProductsSection />
            <Banner items={shippingBannerItems} />
        </>
    )
};

export default Categories;