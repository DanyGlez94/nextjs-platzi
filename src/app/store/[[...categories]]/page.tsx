import { ProductsWrapper } from "app/components/store/ProductsWrapper";
import { getProducts } from "app/services/shopify";

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
  const { categories } = props.params;
  return (
    <ProductsWrapper products={products}/>
  )
}
