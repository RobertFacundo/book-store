"use client"

import NavBar from "../navigation/NavBar";
import ToTopButton from "./ToTopButton";
import { useScroll } from "@/shared/hooks/useScroll";
import { useIsDesktop } from "@/shared/hooks/useIsDesktop";

const ScrollUiManager = ({ children }: { children: React.ReactNode }) => {
    const scrollY = useScroll();
    const isDesktop = useIsDesktop();

    // SOLO en desktop
    const hideNav = isDesktop && scrollY > 120;

    return (

        <>
            {!hideNav && <NavBar />}
            {children}
            {scrollY > 300 && <ToTopButton />}
        </>
    )
};

export default ScrollUiManager;