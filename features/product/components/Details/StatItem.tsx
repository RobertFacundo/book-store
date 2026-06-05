import { ReactNode } from "react";

type StatItemProps = {
    icon: ReactNode;
    label: string;
    value: string | number;
};

const StatItem = ({ icon, label, value }: StatItemProps) => {
    return (
        <div className="flex items-center gap-4">
            <div className="text-white/70">
                {icon}
            </div>

            <div className="text-white/70 text-sm leading-tight">
                {label}
                <br />
                <span className="text-yellow-500/70 font-semibold">
                    {value}
                </span>
            </div>
        </div>
    );
};

export default StatItem;