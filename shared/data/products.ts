import { StaticImageData } from "next/image";
import fantasyBook from '@/shared/assets/images/covers/fantasyCover.png'
import mysteryBook from '@/shared/assets/images/covers/mysteryCover.png'
import romanceBook from '@/shared/assets/images/covers/romanceCover.png'
import scienceFictionBook from '@/shared/assets/images/covers/scienceFictionCover.png'
// import classicBook from '@/shared/assets/images/covers/classicCover.png'

export type ProductType = {
    id: number;
    category:
    | "fantasy"
    | "mistery"
    | "romance"
    | "science-fiction"
    | "classic";

    title: string;
    image: StaticImageData;
    author: string;

    rating: number;
    price: number;

    quote: string;
    pageCount: number;
    year: number;
    synopsis: string;
}


export const products: ProductType[] = [
    {
        id: 1,
        category: "fantasy",

        title: "The Crystal Kingdom",
        image: fantasyBook,

        author: "Sample Author",

        rating: 4.8,
        price: 24.99,

        quote:
            "Every journey begins with a single step into the unknown.",

        pageCount: 420,
        year: 2023,

        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
        id: 2,
        category: "mistery",

        title: "The Silent Manor",
        image: mysteryBook,

        author: "Sample Author",

        rating: 4.6,
        price: 21.99,

        quote:
            "Some secrets are buried for a reason.",

        pageCount: 368,
        year: 2021,

        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3,
        category: "romance",

        title: "Hearts in Bloom",
        image: romanceBook,

        author: "Sample Author",

        rating: 4.7,
        price: 19.99,

        quote:
            "Sometimes love finds us when we least expect it.",

        pageCount: 312,
        year: 2022,

        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        id: 4,
        category: "science-fiction",

        title: "Beyond the Stars",
        image: scienceFictionBook,

        author: "Sample Author",

        rating: 4.9,
        price: 27.99,

        quote:
            "The future belongs to those willing to explore the unknown.",

        pageCount: 486,
        year: 2025,

        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur."
    },
    {
        id: 5,
        category: "classic",

        title: "Echoes of Time",
        image: scienceFictionBook,

        author: "Sample Author",

        rating: 4.7,
        price: 22.99,

        quote:
            "Great stories never fade; they simply find new readers.",

        pageCount: 398,
        year: 1954,

        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum."
    }
];