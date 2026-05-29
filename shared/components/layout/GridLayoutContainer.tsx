import { ReactNode } from "react";

type GridLayoutContainerProps = {
    children: ReactNode;
}

const GridLayoutContainer = ({ children }: GridLayoutContainerProps) => {
    return (
        <div className="w-full mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
                { children}
            </div>
        </div>
    )
};

export default GridLayoutContainer;