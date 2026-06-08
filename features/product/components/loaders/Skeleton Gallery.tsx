import SkeletonBox from "./SkeletonBox";

const SkeletonGallery = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full mt-15">
            <div className="flex lg:flex-col flex-row gap-3 py-4 px-2 bg-zinc-700/30 rounded-md ml-10">
                <SkeletonBox className="h-[140px] w-[120px]" />
                <SkeletonBox className="h-[140px] w-[120px]" />
                <SkeletonBox className="h-[140px] w-[120px]" />
            </div>

            <div className="flex justify-center items-center mt-5">
                <SkeletonBox className="lg:h-[80vh] h-[50vh] w-[350px]" />
            </div>
        </div>
    )
};

export default SkeletonGallery;