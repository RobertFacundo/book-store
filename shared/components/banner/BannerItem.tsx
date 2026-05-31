import { BannerItemType } from "@/shared/data/BannerItems";

type BannerItemProps={
    item: BannerItemType
}

const BannerItem = ({item}: BannerItemProps) => {
    const {title, subtitle, icon:Icon} = item;

    return (
        <div className={`flex flex-col items-center gap-2 lg:gap-4 font-[family-name:var(--font-custom)] pb-0 lg:pb-2 border-b-0 border-r border-zinc-700/50 last:border-r-0`}>
            <Icon className="text-yellow-600/60 size-6 lg:size-14" strokeWidth={1} />
            <div className="space-y-2 tracking-wide text-center">
                <h3 className="text-white font-medium lg:text-sm text-[9px] pr-1">{title}</h3>
                <p className="text-zinc-400 lg:text-sm text-[7px] w-full">{subtitle}</p>
            </div>
        </div>
    )
};

export default BannerItem;