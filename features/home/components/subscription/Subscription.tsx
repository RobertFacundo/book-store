"use client"
import subscriptionImage from '@/shared/assets/images/subscription.jpg'
import Image from 'next/image';
import { useRef } from 'react';
import { useSubscriptionAnimation } from '../../animations/useSubscriptionAnimation';

const Subscription = () => {
    const ref = useRef<HTMLDivElement>(null);
    useSubscriptionAnimation(ref)
    return (
        <div ref={ref} className="flex h-[300px]">
            <div className='relative w-1/2'>
                <Image src={subscriptionImage} className="object-cover object-[50%_65%]" fill alt="image" />
                <div className='absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent to-black' />
            </div>
            <div className="flex flex-col w-1/2 bg-black text-white items-start justify-center lg:gap-10 gap-8 px-10 lg:px-16 font-[family-name:var(--font-ui)] ">
                <h1 className='title text-2xl lg:text-5xl font-light tracking-wide'>Dont miss out!</h1>
                <p className='description lg:text-xl text-md text-zinc-500'>Subscribe to receive news, new releases, and exclusive recommendations</p>
                <div className="form relative flex w-fit  bg-zinc-700/30 rounded-md border border-white/30">
                    <input type="email" placeholder="Your email" className='px-5 py-2 lg:w-[350px] w-[100px]'/>
                    <button className='bg-yellow-500/40 text-black px-5 py-2 rounded-md hover:bg-yellow-500 cursor-pointer transition-colors ease-in-out duration-500'>Subscribe</button>
                </div>
            </div>
        </div>
    )
};

export default Subscription;