import { StaticImageData } from "next/image"
import first from '@/shared/assets/images/gallery/galleryGrid1.png'
import second from '@/shared/assets/images/gallery/galleryGrid2.png'
import third from '@/shared/assets/images/gallery/galleryGrid3.png'

type galleryPicType = {
    src: StaticImageData;
    alt: string;
}

export const galleryPics: galleryPicType[] = [
    { src: first, alt: "Cover book" },
  { src: second, alt: "Open book" },
  { src: third, alt: "back cover book" },
]