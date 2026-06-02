const ProductCardSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col gap-2 rounded-md bg-zinc-700/20 border border-white/10">

            <div className="h-[250px] w-full bg-zinc-800" />

            <div className="p-3 flex flex-col gap-2">
                <div className="h-6 w-3/4 bg-zinc-800 rounded" />
                <div className="h-4 w-1/2 bg-zinc-800 rounded" />
                <div className="h-4 w-1/3 bg-zinc-800 rounded" />
            </div>

        </div>
    )
};

export default ProductCardSkeleton;