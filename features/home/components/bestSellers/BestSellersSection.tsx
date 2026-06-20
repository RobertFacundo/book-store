"use client"
import { bestSellers } from "@/shared/data/bestSellers";
import BestSellersCard from "./BestSellersCard";
import SectionLayout from "@/shared/components/layout/SectionLayout";
import TitleSection from "@/shared/components/titles/TitleSection";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";
import { useRef } from "react";
import { useBestSellersAnimation } from "../../animations/useBestSellersAnimation";

type BestSellersSectionProps = {
    title: string;
}

const BestSellersSection = ({ title }: BestSellersSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useBestSellersAnimation(ref)
    return (
        <SectionLayout className="md:px-4 pb-10">
            <TitleSection title={title} />
            <GridLayoutContainer gridRef={ref} className="grid-cols-1">
                {bestSellers.map((item) => (
                    <BestSellersCard key={item.id} item={item} />
                ))}
            </GridLayoutContainer>
        </SectionLayout>
    )
};

export default BestSellersSection;