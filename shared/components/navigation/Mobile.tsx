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
                <div className="fixed inset-0 rounded-xl bg-black/10 backdrop-blur-xs p-6 items-center justify-center">
                    <div className="h-full flex items-center justify-center">
                        <ul className="flex flex-col items-center gap-10">
                            <NavLinks
                                onClick={() => setIsOpen(false)}
                                className="text-6xl text-white hover:text-yellow-400 transition"
                            />
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Mobile;