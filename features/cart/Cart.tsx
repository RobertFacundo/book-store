"use client"

import Summary from "./componentes/Summary";
import ItemGrid from "./componentes/ItemGrid";
import Background from "../product/components/Details/Background";
import Banner from "@/shared/components/banner/Banner";
import { shippingBannerItems } from "@/shared/data/BannerItems";
import BestSellersSection from "../home/components/bestSellers/BestSellersSection";

const Cart = () => {
    return (
       <>
         <div className="flex lg:flex-row flex-col gap-3 w-full bg-black min-h-screen p-10">
             <Background/>
             <div className="lg:w-2/3 z-10">
                 <ItemGrid />
             </div>
             <div className="lg:w-1/3 flex items-center z-10">
                 <Summary />
             </div>
         </div>
         <Banner items={shippingBannerItems}/>
         <BestSellersSection title="Add to your cart"/>
       </>
    )
};

export default Cart;