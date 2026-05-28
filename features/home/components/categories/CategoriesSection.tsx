import { categories } from "@/shared/data/Categories";
import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
    return (
        <section className="w-full bg-black flex flex-col px-0 md:px-18 py-6 gap-8">
            <h1 className="w-fit font-[family-name:var(--font-ui)] ml-4 text-4xl text-white/90 pb-3 border-b border-yellow-500/40">Explore by genre</h1>
            <div className="w-full mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {categories.map((item) => (
                        <CategoryCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default CategoriesSection;