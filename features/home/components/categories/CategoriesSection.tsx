import { categories } from "@/shared/data/Categories";
import CategoryCard from "./CategoryCard";
import SectionLayout from "@/shared/components/layout/SectionLayout";
import TitleSection from "@/shared/components/titles/TitleSection";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";
import Link from "next/link";

const CategoriesSection = () => {
    return (
        <SectionLayout className="md:px-18">
            <TitleSection title="Explore by genre" />
            <GridLayoutContainer className="">
                {categories.map((item) => (
                    <Link href={`/categories/${item.slug}`}  key={item.slug} >
                        <CategoryCard item={item} />
                    </Link>
                ))}
            </GridLayoutContainer>
        </SectionLayout>
    )
};

export default CategoriesSection;