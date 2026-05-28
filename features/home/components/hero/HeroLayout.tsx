import { ReactNode } from "react";

type HeroLayoutProps = {
    children: ReactNode;
}

const HeroLayout = ({ children }: HeroLayoutProps) => {
    return (
        <div className="relative min-h-screen flex items-start md:items-center justify-center md:ml-12 ml-5 md:justify-start px-6 md:px-10 pt-30 md:pt-0 text-center md:text-left">
            {children}
        </div>
    )
};

export default HeroLayout;