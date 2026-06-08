import Background from "../Details/Background";
import SkeletonGallery from "./Skeleton Gallery";
import SkeletonDescription from "./SkeletonDescription";

const SkeletonDetail = () => {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <Background />
            <div className="relative z-10 grid lg:grid-cols-2 grid-cols-1 min-h-screen">
                <div className="flex items-center justify-center">
                    <SkeletonGallery />
                </div>
                <div className="flex items-center ">
                    <SkeletonDescription />
                </div>
            </div>
        </div>
    )
};

export default SkeletonDetail;