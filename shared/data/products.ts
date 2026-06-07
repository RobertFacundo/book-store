import { StaticImageData } from "next/image";
import fantasyBook from '@/shared/assets/images/covers/fantasyCover.png'
import mysteryBook from '@/shared/assets/images/covers/mysteryCover.png'
import romanceBook from '@/shared/assets/images/covers/romanceCover.png'
import scienceFictionBook from '@/shared/assets/images/covers/scienceFictionCover.png'
import classicBook from '@/shared/assets/images/covers/classicCover.png'

export type ProductType = {
    id: number;
    category:
    | "fantasy"
    | "mystery"
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


const baseProducts: Omit<ProductType, "id" | "title" | "price" | "rating" | "year">[] = [
    {
        category: "fantasy",
        image: fantasyBook,
        author: "A. Mystic",
        quote: "Magic is never random.",
        pageCount: 400,
        synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet nam modi magnam at sunt laudantium officiis aperiam, iste obcaecati sit distinctio exercitationem dicta itaque praesentium ullam quisquam tempora! Quod. Inventore voluptas cum ea unde dolorem dicta laboriosam corporis! Deserunt, adipisci ex cupiditate veritatis commodi non voluptatibus vitae culpa ad fuga"
    },
    {
        category: "mystery",
        image: mysteryBook,
        author: "L. Noir",
        quote: "Nothing is what it seems.",
        pageCount: 350,
        synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet nam modi magnam at sunt laudantium officiis aperiam, iste obcaecati sit distinctio exercitationem dicta itaque praesentium ullam quisquam tempora! Quod. Inventore voluptas cum ea unde dolorem dicta laboriosam corporis! Deserunt, adipisci ex cupiditate veritatis commodi non voluptatibus vitae culpa ad fuga"
    },
    {
        category: "romance",
        image: romanceBook,
        author: "E. Heart",
        quote: "Love changes everything.",
        pageCount: 320,
        synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet nam modi magnam at sunt laudantium officiis aperiam, iste obcaecati sit distinctio exercitationem dicta itaque praesentium ullam quisquam tempora! Quod. Inventore voluptas cum ea unde dolorem dicta laboriosam corporis! Deserunt, adipisci ex cupiditate veritatis commodi non voluptatibus vitae culpa ad fuga"
    },
    {
        category: "science-fiction",
        image: scienceFictionBook,
        author: "Z. Nova",
        quote: "The future is unstable.",
        pageCount: 500,
        synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet nam modi magnam at sunt laudantium officiis aperiam, iste obcaecati sit distinctio exercitationem dicta itaque praesentium ullam quisquam tempora! Quod. Inventore voluptas cum ea unde dolorem dicta laboriosam corporis! Deserunt, adipisci ex cupiditate veritatis commodi non voluptatibus vitae culpa ad fuga"
    },
    {
        category: "classic",
        image: classicBook,
        author: "J. Archive",
        quote: "Timeless stories live forever.",
        pageCount: 420,
        synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet nam modi magnam at sunt laudantium officiis aperiam, iste obcaecati sit distinctio exercitationem dicta itaque praesentium ullam quisquam tempora! Quod. Inventore voluptas cum ea unde dolorem dicta laboriosam corporis! Deserunt, adipisci ex cupiditate veritatis commodi non voluptatibus vitae culpa ad fuga"
    }
];

const titles = {
    fantasy: "The Crystal Kingdom",
    mystery: "The Silent Manor",
    romance: "Hearts in Bloom",
    "science-fiction": "Beyond the Stars",
    classic: "Echoes of Time"
};

export const products: ProductType[] = Array.from({ length: 50 })
  .flatMap((_, i) =>
    baseProducts.map((base) => ({
      id: i * 5 + baseProducts.indexOf(base) + 1,
      category: base.category,

      title: `${titles[base.category]} ${i + 1}`,
      image: base.image,

      author: base.author,
      rating: +(4 + Math.random()).toFixed(1),
      price: +(15 + Math.random() * 20).toFixed(2),

      quote: base.quote,
      pageCount: base.pageCount,
      year: 2000 + Math.floor(Math.random() * 25),

      synopsis: base.synopsis
    }))
  );


