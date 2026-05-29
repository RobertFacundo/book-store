import { bestSellers } from "@/shared/data/bestSellers";
import BestSellersCard from "./BestSellersCard";
import SectionLayout from "@/shared/components/layout/SectionLayout";
import TitleSection from "@/shared/components/titles/TitleSection";

const BestSellersSection = () => {
    return (
        <SectionLayout className="md:px-4">
            <TitleSection title="Best sellers" />
            <div className="w-full mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
                    {bestSellers.map((item) => (
                        <BestSellersCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </SectionLayout>
    )
};

export default BestSellersSection;