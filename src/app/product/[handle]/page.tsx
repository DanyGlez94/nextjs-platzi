import { ProductView } from 'app/components/product/ProductView';
import { getProducts } from 'app/services/shopify/products';
import { redirect } from 'next/navigation';
import sanitizeHtml from 'sanitize-html';
interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps ) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  const sanitizedDescription = sanitizeHtml(product.description, {
    allowedTags: ['b', 'i', 'em', 'strong'],
  });

  return {
    title: product.title,
    description: sanitizedDescription,
    keywords: product.tags,
    openGraph: {
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title
        }
      ]
    }
  };
}


export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  if (!id) {
    redirect('/');
  }
  
  return (
    <div>
      <ProductView product={product} />
    </div>
  );
}
