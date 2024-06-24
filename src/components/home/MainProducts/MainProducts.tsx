const getProducts = async () => {
  const res = await fetch(
    `https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`,
    {
      method: 'GET',
      headers: new Headers({
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
      }),
    }
  );
  const data = await res.json();
  return data;
};

export const MainProducts = async () => {
  const products = await getProducts();
  console.log('products:', products);
  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};
