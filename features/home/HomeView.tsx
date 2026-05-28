import CategoriesSection from './components/categories/CategoriesSection';
import HeroSection from './components/hero/HeroSection';
import Banner from '@/shared/components/banner/Banner';

const HomeView = () => {
    return (
        <>
            <HeroSection />
            <Banner />
            <CategoriesSection/>
        </>
    )
};

export default HomeView;