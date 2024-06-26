import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";

interface ICategoryProps {
  params: {
    category: string[];
    searchParams?: {
      search?: string;
    };
  };
}

export default async function Category(props: ICategoryProps) {
  const products = await getProducts();
  return (
    <ProductsWrapper products={products}/>
  )
}
