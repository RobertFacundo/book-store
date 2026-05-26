"use client"
import { useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import useClickOutside from "@/shared/hooks/useClickOutside";

const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setIsOpen(false))
    return (
        <div ref={menuRef} className="relative md:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer">
                {isOpen ? <X /> : <Menu />}
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-4 min-w-[200px] rounded-xl bg-black/10 backdrop-blur-xs p-6">
                    <ul className="flex flex-col gap-4">
                        <NavLinks onClick={() => setIsOpen(false)} className="nav-link text-lg text-white hover:text-yellow-500" />
                    </ul>
                </div>
            )}
        </div>
    )
};

export default Mobile;