import { state } from "./state.js";

export function getProcessedProducts()
{
    const { searchQuery } = state;
    if(!searchQuery) return [...state.products];
    const filteredProducts = state.products.filter((product) => {
        const { title } = product;
        return (title.toLowerCase().includes(searchQuery.toLowerCase()));
    });
    return filteredProducts;
}