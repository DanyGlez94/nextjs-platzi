import Image from 'next/image';
import styles from './MainProducts.module.sass';
import { type Product } from '../../../types';

const getProducts = async () => {
  try {
    const res = await fetch(
      `https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`,
      {
        method: 'GET',
        headers: new Headers({
          'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
        }),
      }
    );
    const { products } = await res.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};

export const MainProducts = async () => {
  const products = await getProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: Product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
