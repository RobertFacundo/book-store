import NavLinks from "./NavLinks";

const Desk = () => {
    return (
        <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-10">
                <NavLinks className="font-[family-name:var(--font-display)] nav-link text-4xl tracking-widest text-white hover:text-yellow-500 mr-10 pb-2"/>
            </ul>
        </div>
    )
};

export default Desk;