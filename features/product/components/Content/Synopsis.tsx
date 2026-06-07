import TitleSection from "@/shared/components/titles/TitleSection";

type SynopsisProps = {
    synopsis: string;
}

const Synopsis = ({ synopsis }: SynopsisProps) => {
    return (
        <div className="flex flex-col gap-5 p-2">
            <TitleSection title="Synopsis" />
            <p
                className="text-white/70 text-xl tracking-wider
                first-letter:font-[family-name:var(--font-display)]
                first-letter:text-6xl
                first-letter:text-yellow-500/90
                first-letter:font-bold
                first-letter:mr-1
            ">
                {synopsis}
            </p>
        </div>
    )
};

export default Synopsis;