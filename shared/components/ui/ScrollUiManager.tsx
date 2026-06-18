"use client"

import NavBar from "../navigation/NavBar";
import ToTopButton from "./ToTopButton";
import { useScroll } from "@/shared/hooks/useScroll";
import { useIsDesktop } from "@/shared/hooks/useIsDesktop";

const ScrollUiManager = ({ children }: { children: React.ReactNode }) => {
    const scrollY = useScroll();
    const isDesktop = useIsDesktop();

    const hideNav = isDesktop && scrollY > 120;

    return (

        <>
            <NavBar hidden={hideNav}/>
            {children}
            <ToTopButton visible={scrollY > 300 }/>
        </>
    )
};

export default ScrollUiManager;