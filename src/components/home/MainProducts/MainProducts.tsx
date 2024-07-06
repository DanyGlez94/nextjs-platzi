import { getProducts } from 'app/services/shopify/products';
import Image from 'next/image';
import styles from './MainProducts.module.sass';
import { type ProductType } from '../../../../types';

export const MainProducts = async () => {
  const products = await getProducts();
  console.log("🚀 ~ MainProducts ~ products:", products)

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: ProductType) => {
          const imageSrc = product.image;
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
