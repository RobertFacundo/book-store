"use client"
import { useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import useClickOutside from "@/shared/hooks/useClickOutside";
import { useMobileNavAnimation } from "@/shared/animations/navigation/useMobileNavAnimation";

const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useMobileNavAnimation(overlayRef, isOpen)
    useClickOutside(menuRef, () => setIsOpen(false))
    return (
        <div ref={menuRef} className="relative md:hidden ml-auto mx-auto">
            <button onClick={() => setIsOpen(prev => !prev)} className="text-white cursor-pointer">
                {isOpen ? <X /> : <Menu />}
            </button>
            <div
                ref={overlayRef}
                className="h-screen w-screen flex items-center justify-center bg-black/10 backdrop-blur-xs p-6"
            >
                <ul className="flex flex-col items-center gap-10 text-center mr-10">
                    <NavLinks
                        onClick={() => setIsOpen(false)}
                        className="text-6xl text-white hover:text-yellow-400 transition text-center"
                    />
                </ul>
            </div>
        </div>
    )
};

export default Mobile;