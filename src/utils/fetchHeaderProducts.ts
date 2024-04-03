import fetchAllProducts from "./fetchAllProducts";

export default async function fetchHeaderProducts(name: string) {
    try {
        const products = await fetchAllProducts();
        const filteredResults = products.filter(product => product.name.toLowerCase().includes(name)).slice(0, 5);
        return filteredResults;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}