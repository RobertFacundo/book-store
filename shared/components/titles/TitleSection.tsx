type TitleSectionProps = {
    title: string;
}

const TitleSection = ({ title }:TitleSectionProps) => {
    return (
        <h1 className="synopsis-title w-fit font-[family-name:var(--font-ui)] ml-4 text-4xl text-white/90 pb-3 border-b border-yellow-500/40">{title}</h1>
    )
};

export default TitleSection;