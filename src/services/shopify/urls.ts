import { env } from 'app/config/env';

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/439524819158/products.json`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/smart_collections.json`,
    products: (collectionId: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/${collectionId}/products.json`,
  },
};
