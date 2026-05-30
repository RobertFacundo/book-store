import { bestSellers } from "@/shared/data/bestSellers";
import BestSellersCard from "./BestSellersCard";
import SectionLayout from "@/shared/components/layout/SectionLayout";
import TitleSection from "@/shared/components/titles/TitleSection";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";

const BestSellersSection = () => {
    return (
        <SectionLayout className="md:px-4 pb-10">
            <TitleSection title="Best sellers" />
            <GridLayoutContainer>
                {bestSellers.map((item) => (
                    <BestSellersCard key={item.id} item={item} />
                ))}
            </GridLayoutContainer>
        </SectionLayout>
    )
};

export default BestSellersSection;