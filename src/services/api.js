export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';

  const promise = await fetch(URL);
  const data = await promise.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  const promise = await fetch(URL);
  const data = await promise.json();

  return data;
}

export async function getProducts(productId) {
  const URL = `https://api.mercadolibre.com/items/${productId}`;

  const promise = await fetch(URL);
  const data = await promise.json();

  return data;
}

export async function getQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  const promise = await fetch(URL);
  const data = await promise.json();

  return data;
}

export async function getByCategory(categoryId) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  const promise = await fetch(URL);
  const data = await promise.json();

  return data;
}
