import { MoonStar, Search, Heart, Rocket, Landmark, type LucideIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import fantasy from '@/shared/assets/images/categories/fantasy.jpg'
import mistery from '@/shared/assets/images/categories/mistery.png'
import romance from '@/shared/assets/images/categories/romance.jpg'
import scienceFiction from '@/shared/assets/images/categories/science-fiction.png'
import classic from '@/shared/assets/images/categories/classic.jpg'

export type categoryType = {
    icon: LucideIcon;
    title: string;
    image: StaticImageData;
    slug: string;
}

export const categories: categoryType[] = [
    { icon: MoonStar, title: "Fantasy", image: fantasy, slug: "fantasy"},
    { icon: Search, title: "Mistery", image: mistery, slug: "mistery"},
    { icon: Heart, title: "Romance", image: romance, slug: "romance"},
    { icon: Rocket, title: "Science Fiction", image: scienceFiction, slug: "science-fiction" },
    { icon: Landmark, title: "Classic", image: classic, slug: "classic" },
];