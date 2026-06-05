import { useState } from "react";
import Image from "next/image";
import { galleryPics } from "@/shared/data/galleryPics";

const Gallery = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full mt-15">
            <div className="flex lg:flex-col flex-row gap-3 py-4 px-2 bg-zinc-700/30 rounded-md ml-10">
                {galleryPics.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => setSelected(index)}
                        className={`h-[140px] w-[120px] cursor-pointer z-10 ${selected === index ? "border-2 border-yellow-500/70" : "border border-transparent"}`}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center mt-5">
                <Image src={galleryPics[selected].src} alt={galleryPics[selected].alt} width={700} height={700} className="object-contain lg:h-[80vh] h-[50vh] transition-all duration-300" />
            </div>
        </div>
    )
};

export default Gallery;