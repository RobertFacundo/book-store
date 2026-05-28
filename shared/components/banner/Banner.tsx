import { BannerItems } from "../../data/BannerItems";
import BannerItem from "./BannerItem";

const Banner = () => {
    return (
        <section className="py-16 px-6 bg-black">
            <div className="max-w-7xl mx-auto bg-zinc-900/90 rounded-xl p-5 backdrop-blur-md">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                 {BannerItems.map((item)=>(
                    <BannerItem key={item.title}  item={item}/>
                 ))}
               </div>
            </div>
        </section>
    )
};

export default Banner;