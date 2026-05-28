import { TruckIcon, TagIcon, CheckCheckIcon, Headset, type LucideIcon } from "lucide-react"


export type BannerItemtype = {
    title: string,
    subtitle: string,
    icon: LucideIcon
}

export const BannerItems: BannerItemtype[] = [
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