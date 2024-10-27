import { env } from 'app/config/env';
import { shopifyUrls } from './urls';
import { ProductType } from '../../../types';
import axios from 'axios';

export const getProducts = async (id?: string): Promise<ProductType[]> => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;
    const res = await axios.get(apiUrl, {
      headers: ({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
        'Content-Type': 'application/json',
      }),
    });

    const { data : { products } } = res;

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      };
    });

    return transformedProducts;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
    }),
    cache: 'force-cache', // this is for forcing the browser to cache the response in the browser cache memory
    // cache: 'no-cache', // this is for not caching the response in the browser cache memory
    // next: {
    //   revalidate: 10, // revalidate every 10 seconds for new data from the server
    // }
    next: {
      tags: ['main-products'],
    },
  });

  const { products } = await response.json();

  return products;
};
