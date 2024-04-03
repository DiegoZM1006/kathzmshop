import fetchProducts from "./fetchAllProducts";

export default async function fetchMaxAndMinPrice() {
  try {
    const result = await fetchProducts();
    const maxPrice = Math.max(...result.map(item => item.price))
    const minPrice = Math.min(...result.map(item => item.price));
    return [maxPrice, minPrice];
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}