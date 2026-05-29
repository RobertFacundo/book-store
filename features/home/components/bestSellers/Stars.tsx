import { Star } from "lucide-react";

type StarsProps = {
    rating: number;
}

const Stars = ({ rating }: StarsProps) => {
    return (
        <div className="flex gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => {

                return (
                    <div key={i} className="relative w-5 h-5">
                        <Star size={18} className="absolute" fill="none" />

                        {rating >= i + 0.5 && (
                            <div className={`absolute overflow-hidden ${rating >= i + 1 ? "w-full" : "w-2/5"}`}>
                                <Star size={18} fill="currentColor" />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
};

export default Stars;