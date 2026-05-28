const HeroContent = () => {
    return (
        <div className="flex flex-col gap-14 max-w-xl text-white ">
            <h1 className="font-[family-name:var(--font-display)] text-8xl font-light leading-none tracking-wide"> <span className="text-yellow-500">Stories</span> worth discovering</h1>
            <p className="text-3xl text-white/80 max-w-[500px]"> A curated collection of books designed to inspire, challenge, and move you</p>
            <button className="font-[family-name:var(--font-display)] text-4xl md:self-start px-6 py-3 border border-yellow-500 bg-yellow-500/70 md:bg-transparent md:text-yellow-500 hover:bg-yellow-500 hover:text-black text-black transition-colors ease-in-out duration-700 rounded-md cursor-pointer z-20">
                Explore collection
            </button>
            
        </div>
    )
};

export default HeroContent;