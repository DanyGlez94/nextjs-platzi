import { env } from 'app/config/env';

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`
  }
}