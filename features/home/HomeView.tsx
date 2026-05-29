import BestSellersSection from './components/bestSellers/BestSellersSection';
import CategoriesSection from './components/categories/CategoriesSection';
import HeroSection from './components/hero/HeroSection';
import Banner from '@/shared/components/banner/Banner';

const HomeView = () => {
    return (
        <>
            <HeroSection />
            <Banner />
            <CategoriesSection/>
            <BestSellersSection/>
        </>
    )
};

export default HomeView;