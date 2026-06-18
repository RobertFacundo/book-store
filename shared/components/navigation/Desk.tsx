import { useNavAnimation } from "@/shared/animations/navigation/useNavAnimation";
import NavLinks from "./NavLinks";
import { useRef } from "react";

const Desk = () => {
    const navRef = useRef<HTMLDivElement>(null);

    useNavAnimation(navRef);

    return (
        <div ref={navRef} className="hidden md:flex flex-1 justify-center opacity-0">
            <ul className="flex items-center gap-10">
                <NavLinks className="font-[family-name:var(--font-display)] nav-link text-4xl tracking-widest text-white hover:text-yellow-500 mr-10 pb-2" />
            </ul>
        </div>
    )
};

export default Desk;