import SkeletonBox from "./SkeletonBox";

const SkeletonDescription = () => {
    return (
        <div className="w-full flex flex-col gap-8 lg:ml-5 p-5 items-center text-center">
               <SkeletonBox className="h-4 w-24" />

            <div className="flex flex-col gap-2 items-center">
                <SkeletonBox className="h-12 w-72" />
                <SkeletonBox className="h-6 w-48" />
            </div>

            <SkeletonBox className="h-6 w-32" />

            <SkeletonBox className="h-28 w-[500px] max-w-full rounded-md" />

            <div className="flex gap-4">
                <SkeletonBox className="h-20 w-32" />
                <SkeletonBox className="h-20 w-32" />
            </div>

            <SkeletonBox className="h-12 w-36" />

            <div className="flex flex-col gap-4 items-center">
                <SkeletonBox className="h-12 w-40" />
                <SkeletonBox className="h-12 w-[250px]" />
            </div>
        </div>
    )
};

export default SkeletonDescription;