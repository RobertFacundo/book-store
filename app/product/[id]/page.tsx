import ProductDetail from "@/features/product/ProductDetail";

type Props = {
  params:Promise<{
    id:string;
  }>;
};

const ProductDetailPage = async ({params}:Props) => {
  const {id} = await params;
  return <ProductDetail productId={id}/>;
};

export default ProductDetailPage;