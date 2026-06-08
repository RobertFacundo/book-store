
type Props = {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const QuantitySelector = ({ quantity, setQuantity }: Props) => {
    return (
        <div className="flex gap-2 items-center text-white/70 font-[family-name:var(--font-custom) font-bold text-xl w-fit border border-white/30 rounded-md">
            <button
                onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                className="px-3 cursor-pointer border-r border-white/30 bg-zinc-500/20 transition-all ease-in-out duration-300 hover:bg-zinc-500/30"
            >
                -
            </button>

            <span className="text-white px-3">{quantity}</span>

            <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 cursor-pointer border-l border-white/30 bg-zinc-500/20 transition-all ease-in-out duration-300 hover:bg-zinc-500/30"
            >
                +
            </button>
        </div>
    )
};

export default QuantitySelector;