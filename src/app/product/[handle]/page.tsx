import { ProductView } from 'app/components/product/ProductView';
import { getProducts } from 'app/services/shopify/products';
interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];
  console.log("🚀 ~ ProductPage ~ product:", product)
  
  return (
    <div>
      <ProductView product={product} />
      {/* <h1>Hola</h1> */}
    </div>
  );
}
