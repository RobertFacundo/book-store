import Quote from './components/quote/Quote';
import BestSellersSection from './components/bestSellers/BestSellersSection';
import CategoriesSection from './components/categories/CategoriesSection';
import HeroSection from './components/hero/HeroSection';
import Banner from '@/shared/components/banner/Banner';
import Subscription from './components/subscription/Subscription';
import { shippingBannerItems } from '@/shared/data/BannerItems';
import { communityBannerItems } from '@/shared/data/BannerItems';

const HomeView = () => {
    return (
        <>
            <HeroSection />
            <Banner items={shippingBannerItems} />
            <CategoriesSection />
            <BestSellersSection title="Best Sellers"/>
            <Quote />
            <Banner items={communityBannerItems} />
            <Subscription />
        </>
    )
};

export default HomeView;