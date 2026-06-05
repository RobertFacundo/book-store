import { ProductType } from "@/shared/data/products";

type ContentProps={
    product:ProductType
}

const Content = ({product}:ContentProps) => {
    return (
        <h1>Content</h1>
    )
};

export default Content;