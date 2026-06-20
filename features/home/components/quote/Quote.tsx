"use client"
import Image from "next/image";
import quoteImage from '@/shared/assets/images/quote.jpg'
import { useRef } from "react";
import { useQuoteAnimation } from "../../animations/useQuoteAnimation";

const Quote = () => {
    const ref = useRef<HTMLDivElement>(null);

    useQuoteAnimation(ref)
    return (
        <div ref={ref} className="relative w-full h-[230px] overflow-hidden">
            <Image src={quoteImage} alt="quote image" className="object-cover object-[50%_43%]" fill/>
            <div className="absolute inset-0 bg-black/50"/>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-2xl text-center px-4">
                    <p className="quote text-4xl lg:text-6xl text-yellow-500/90 font-[family-name:var(--font-display)] tracking-wider">
                        "A room without books is like a body without a soul."
                    </p>
                    <span className="author block mt-4 text-xl lg:text-2xl text-white/60 font-[family-name:var(--font-ui)] tracking-wide">
                        -Cicero
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Quote;

