import { categories } from "@/shared/data/Categories";
import CategoryCard from "./CategoryCard";
import SectionLayout from "@/shared/components/layout/SectionLayout";
import TitleSection from "@/shared/components/titles/TitleSection";

const CategoriesSection = () => {
    return (
        <SectionLayout className="md:px-18">
            <TitleSection title="Explore by genre" />
            <div className="w-full mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {categories.map((item) => (
                        <CategoryCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </SectionLayout>
    )
};

export default CategoriesSection;