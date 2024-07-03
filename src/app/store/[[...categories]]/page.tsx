import { ProductsWrapper } from 'app/components/Store/ProductsWrapper';
import {
  getCollectionProducts,
  getCollections,
} from 'app/services/shopify/collections';
import { getProducts } from 'app/services/shopify/products';

interface ICategoryProps {
  params: {
    categories: string[];
    searchParams?: {
      search?: string;
    };
  };
}

export default async function Category(props: ICategoryProps) {
  const { categories } = props.params;
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
