import { ReactNode } from "react";

type SectionLayoutProps = {
    children: ReactNode,
    className: string
}

const SectionLayout = ({ children, className }: SectionLayoutProps) => {
    return (
        <section className={`w-full bg-black flex flex-col px-0 ${className} py-6 gap-8`}>
            {children}
        </section>
    )
};

export default SectionLayout;