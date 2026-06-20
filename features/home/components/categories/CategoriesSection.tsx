"use client"
import { categories } from "@/shared/data/Categories";
import CategoryCard from "./CategoryCard";
import SectionLayout from "@/shared/components/layout/SectionLayout";
import TitleSection from "@/shared/components/titles/TitleSection";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";
import Link from "next/link";
import { useRef } from "react";
import { useCategoriesAnimation } from "../../animations/useCategoriesAnimation";

const CategoriesSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    useCategoriesAnimation(ref)

    return (
        <SectionLayout className="md:px-18">
            <TitleSection title="Explore by genre" />
            <GridLayoutContainer gridRef={ref} className="">
                {categories.map((item) => (
                    <Link href="/categories"  key={item.slug} >
                        <CategoryCard item={item} />
                    </Link>
                ))}
            </GridLayoutContainer>
        </SectionLayout>
    )
};

export default CategoriesSection;