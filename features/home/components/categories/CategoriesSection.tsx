import { categories } from "@/shared/data/Categories";
import CategoryCard from "./CategoryCard";
import SectionLayout from "@/shared/components/layout/SectionLayout";
import TitleSection from "@/shared/components/titles/TitleSection";
import GridLayoutContainer from "@/shared/components/layout/GridLayoutContainer";

const CategoriesSection = () => {
    return (
        <SectionLayout className="md:px-18">
            <TitleSection title="Explore by genre" />
            <GridLayoutContainer>
                {categories.map((item) => (
                    <CategoryCard key={item.title} item={item} />
                ))}
            </GridLayoutContainer>
        </SectionLayout>
    )
};

export default CategoriesSection;