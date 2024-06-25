import { shopifyUrls } from './urls';
import { env } from 'app/config/env';

export const getProducts = async () => {
  try {
    const res = await fetch(shopifyUrls.products.all, {
      method: 'GET',
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      }),
    });
    const { products } = await res.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};
