import type { StaticImageData } from 'next/image';
import fantasy from '@/shared/assets/images/categories/fantasy.jpg'
import mistery from '@/shared/assets/images/categories/mistery.png'
import romance from '@/shared/assets/images/categories/romance.jpg'
import scienceFiction from '@/shared/assets/images/categories/science-fiction.png'
import classic from '@/shared/assets/images/categories/classic.jpg'

export type CategoryIcon =
    | "fantasy"
    | "mistery"
    | "romance"
    | "science-fiction"
    | "classic";

export type categoryType = {
    icon: CategoryIcon;
    title: string;
    image: StaticImageData;
    slug: string;
}

export const categories: categoryType[] = [
    { icon:"fantasy", title: "Fantasy", image: fantasy, slug: "fantasy"},
    { icon:"mistery", title: "Mistery", image: mistery, slug: "mistery"},
    { icon:"romance", title: "Romance", image: romance, slug: "romance"},
    { icon:"science-fiction", title: "Science Fiction", image: scienceFiction, slug: "science-fiction" },
    { icon:"classic", title: "Classic", image: classic, slug: "classic" },
];