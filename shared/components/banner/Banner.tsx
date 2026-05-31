import { BannerItemType } from "../../data/BannerItems";
import BannerItem from "./BannerItem";

type BannerProps = {
    items: BannerItemType[]
}

const Banner = ({items}:BannerProps) => {
    return (
        <section className="py-8 px-6 bg-black">
            <div className="max-w-7xl mx-auto bg-zinc-900/90 rounded-xl p-5 backdrop-blur-md">
               <div className="grid grid-cols-4 lg:gap-4 gap-2">
                 {items.map((item)=>(
                    <BannerItem key={item.title}  item={item}/>
                 ))}
               </div>
            </div>
        </section>
    )
};

export default Banner;