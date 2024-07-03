import { env } from 'app/config/env';
import { shopifyUrls } from './urls';
import axios from 'axios';

export const getCollections = async () => {
  try {
    const res = await axios.get(shopifyUrls.collections.all, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    const { data } = res;

    const { smart_collections } = data;
    const transformedCollections = smart_collections.map((collection: any) => ({
      id: collection.id,
      title: collection.title,
      handle: collection.handle,
    }));
    return transformedCollections;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

export const getCollectionProducts = async (collectionId: string) => {
  try {
    const res = await axios.get(shopifyUrls.collections.products(collectionId), {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    const { data } = res;

    const { products } = data;
    return products;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
