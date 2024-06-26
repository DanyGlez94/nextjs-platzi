import { env } from 'app/config/env';
import { shopifyUrls } from './urls';

export const getCollections = async () => {
  try {
    const res = await fetch(shopifyUrls.collections.all, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      },
    });
    const text = await res.text();

    // Intentar encontrar la parte JSON en el texto crudo
    const jsonStart = text.indexOf('{"smart_collections":');
    const jsonEnd = text.lastIndexOf('}') + 1;
    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error('JSON start or end not found in the response.');
    }

    const jsonText = text.substring(jsonStart, jsonEnd);

    const { smart_collections } = await JSON.parse(jsonText);
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
