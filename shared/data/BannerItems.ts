import { TruckIcon, TagIcon, CheckCheckIcon, Headset, BookOpenText, Leaf, Gift, Star, type LucideIcon, Book } from "lucide-react"


export type BannerItemType = {
    title: string,
    subtitle: string,
    icon: LucideIcon
}

export const shippingBannerItems: BannerItemType[] = [
    {
        title: "Worldwide Delivery",
        subtitle: "Carefully packed for every reader",
        icon: TruckIcon
    },
    {
        title: "Thoughtful Extras",
        subtitle: "Bookmarks included ",
        icon: TagIcon
    },
    {
        title: "Secure Checkout",
        subtitle: "Safe and protected payments",
        icon: CheckCheckIcon
    },
    {
        title: "Personal Support",
        subtitle: "We are here to help you",
        icon: Headset
    },
]

export const communityBannerItems: BannerItemType[] = [
    {
        title: "Curated Selection",
        subtitle: "Handpicked books for every kind of reader",
        icon: BookOpenText
    },
    {
        title: "Exclusive Editions",
        subtitle: "Find rare and special editions",
        icon: Leaf
    },
    {
        title: "Share the Gift of Reading",
        subtitle: "Send digital gift cards to fellow book lovers",
        icon: Gift
    },
    {
        title: "Book Lovers Community",
        subtitle: "Connect through literary events and discussions",
        icon: Star
    },
]

