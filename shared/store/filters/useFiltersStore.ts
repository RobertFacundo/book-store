import { create } from 'zustand';

type Category =
    | "fantasy"
    | "mystery"
    | "romance"
    | "science-fiction"
    | "classic";

type FiltersStore = {
    categories: Category[];
    maxPrice: number;

    toggleCategory: (category: Category) => void;
    setMaxPrice: (price: number) => void;

    resetFilters: () => void;
};

export const useFiltersStore = create<FiltersStore>((set) => ({
    categories: [],
    maxPrice: 33,
    toggleCategory: (category) =>
        set((state) => ({
            categories: state.categories.includes(category)
                ? state.categories.filter((c) => c !== category)
                : [...state.categories, category],
        })),

    setMaxPrice: (price) =>
        set({
            maxPrice: price,
        }),

    resetFilters: () =>
        set({
            categories: [],
            maxPrice: 100,
        }),
}));