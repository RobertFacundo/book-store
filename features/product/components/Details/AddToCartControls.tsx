import QuantitySelector from "./QuantitySelector";

const AddToCartControls = () => {
    return (
        <div className="flex flex-col gap-6 items-center">
            <QuantitySelector />
            <button className="py-2 px-4 rounded-md bg-yellow-500/70 text-black w-[350px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-yellow-500 font-semibold tracking-wide text-xl">
                Add to Cart
            </button>
        </div>
    )
};

export default AddToCartControls;