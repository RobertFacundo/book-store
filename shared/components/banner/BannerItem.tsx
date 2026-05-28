import { BannerItemtype } from "@/shared/data/BannerItems";

type BannerItemProps={
    item: BannerItemtype
}

const BannerItem = ({item}: BannerItemProps) => {
    const {title, subtitle, icon:Icon} = item;

    return (
        <div className={`flex flex-col items-center gap-6 font-[family-name:var(--font-custom)] pb-5 border-b border-zinc-700/50 last:border-b-0 lg:border-b-0 lg:border-r lg:border-zinc-700/50 last:border-r-0 lg:pr-6`}>
            <Icon className="text-yellow-600" size={55} strokeWidth={1} />
            <div className="space-y-2 tracking-wide ">
                <h3 className="text-white font-medium">{title}</h3>
                <p className="text-zinc-400 text-sm">{subtitle}</p>
            </div>
        </div>
    )
};

export default BannerItem;