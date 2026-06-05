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

    const maxPrice = useFiltersStore((state) => state.maxPrice);
    const setMaxPrice = useFiltersStore((state) => state.setMaxPrice);

    return (
        <div className="flex flex-col lg:flex-row gap-10 text-white w-full justify-center px-6 py-2 ">
            <div className="flex gap-3 rounded-xl bg-zinc-900 lg:px-6 px-3 py-2 lg:text-xl text-md">
                {categoryOptions.map((category) => {
                    const isActive = categories.includes(category);

                    return (
                        <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`
                            text-left transition-all duration-800 cursor-pointer px-3
                            ${isActive ? "text-yellow-500 scale-110" : "text-white"}
                            hover:text-yellow-400 hover:scale-110
                        `}
                        >
                            {formatCategory(category)}
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xl text-zinc-300">
                    Max price: ${maxPrice}
                </label>
                <input type="range" min={16} max={33} step={1} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full cursor-pointer slider-yellow" />
            </div>
        </div>
    )
};

export default Filters;