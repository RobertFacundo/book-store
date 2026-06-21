const SkeletonBox = ({ className }: { className?: string }) => {
    return (
        <div className={`animate-pulse bg-yellow-700/30 rounded ${className}`} />
    )
};

export default SkeletonBox;