"use client"
import heroImage from '@/shared/assets/images/heroCategories.png'
import Image from "next/image";
import { useRef } from 'react';
import { useHeroCategoriesSectionAnimation } from '../../animations/useHeroCategoriesSectionAnimation';

const HeroCategoriesSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    useHeroCategoriesSectionAnimation(ref)
    return (
        <div ref={ref} className="relative lg:h-[70vh] h-screen">
            <Image src={heroImage} alt="hero" fill className="object-cover object-[60%_15%] lg:object-center" />
            <div className='absolute inset-0 bg-black/10' />
            <div className="absolute inset-0 flex items-center  p-10">
                <p className='paragraph text-white/70 font-[family-name:var(--font-display)] lg:text-5xl text-5xl lg:max-w-[560px] tracking-wide'>
                    Browse our collection of <span className='text-yellow-500'>books</span> across every genre and find stories that <span className='text-yellow-500'>inspire</span>, <span className='text-yellow-500'>entertain</span> and <span className='text-yellow-500'>educate</span>.
                </p>
            </div>
        </div>
    )
};

export default HeroCategoriesSection;