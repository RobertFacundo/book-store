import Image from "next/image";
import authorImage from '@/shared/assets/images/authorAvatar.webp'

type AuthorProps = {
    author: string
}

const Author = ({ author }: AuthorProps) => {
    return (
        <div className="flex lg:flex-row flex-col gap-5 ">
            <Image
                src={authorImage}
                alt={author}
                width={140}
                height={140}
                className="h-[140px] w-[140px] rounded-full object-cover border-2 border-yellow-500/10 mx-auto"
            />
            <div className="flex flex-col text-right">
                <h1 className="text-yellow-500 text-4xl tracking-wide font-[family-name:var(--font-display)] pr-3">{author}</h1>
                <p className="text-white/50 tracking-normal text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet nam modi magnam at sunt laudantium officiis aperiam, iste obcaecati sit distinctio exercitationem dicta itaque praesentium ullam quisquam tempora! Quod.
                    Inventore voluptas cum ea unde dolorem dicta laboriosam corporis!
                </p>
            </div>
        </div>
    )
};

export default Author;