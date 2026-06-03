"use client"

import { useFiltersStore } from "@/shared/store/filters/useFiltersStore";
import { formatCategory } from "../../utils/formatCategory";

const categoryOptions = [
    "fantasy",
    "mystery",
    "romance",
    "science-fiction",
    "classic",
] as const;

const Filters = () => {
    const categories = useFiltersStore((state) => state.categories);
    const toggleCategory = useFiltersStore((state) => state.toggleCategory);

    return (
        <div className="flex flex-col gap-2">
            {categoryOptions.map((category) => (
                <label key={category} className="text-white">
                    <input
                        type="checkbox"
                        checked={categories.includes(category)}
                        onChange={() => toggleCategory(category)}
                    />
                    {formatCategory(category)}
                </label>
            ))}
            <p className="text-white">
                {JSON.stringify(categories)}
            </p>
        </div>
    )
};

export default Filters;