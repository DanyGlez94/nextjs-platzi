'use client';

import { useParams, useSearchParams } from "next/navigation";
interface ProductPageProps {
  searchParams: {
    id: string;
  }
}

export default function ProductPage(props: ProductPageProps) {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log('params', params);
  console.log('searchParams', searchParams);
  console.log('id --->', id);
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}