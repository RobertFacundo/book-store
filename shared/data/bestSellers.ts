import { StaticImageData } from "next/image"
import neuromancer from '@/shared/assets/images/bestSellers/neuromancer.png'
import arabianNights from '@/shared/assets/images/bestSellers/arabian.png'
import grimm from '@/shared/assets/images/bestSellers/grimm.png'
import androids from '@/shared/assets/images/bestSellers/androids.png'
import frankeinstein from '@/shared/assets/images/bestSellers/frankeinstein.png'

export type bestSellerType = {
    img: StaticImageData,
    title: string,
    author: string,
    rating: number,
    price: string,
    id:number,
}

export const bestSellers: bestSellerType[] = [
    { id:2,img:arabianNights, title: "One Thousand and One Nights", author: "Anonymous", rating:5, price: "23.60" },
    { id:3,img:grimm, title: "Fairy Tales of the Brothers Grimm", author: "Brothers Grimm", rating:5, price: "16.60" },
    { id:1,img:neuromancer, title: "Neuromancer", author: "William Gibson", rating:5, price: "18.40" },
    { id:4,img:androids, title: "Do androids dream of electric sheeps?", author: "Philip K. Dick", rating:5, price: "18.60" },
    { id:5,img:frankeinstein, title: "Frankenstein", author: "Mary Shelley", rating:5, price: "17.90" }
]