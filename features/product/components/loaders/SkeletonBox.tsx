const SkeletonBox = ({ className }: { className?: string }) => {
    return (
        <div className={`animate-pulse bg-zinc-700 rounded ${className}`} />
    )
};

export default SkeletonBox;