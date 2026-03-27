import { state } from "../data/state.js";

function getProductsOnSearch(products)
{
    const { searchQuery } = state;
    if(!searchQuery) return products;
    else {
        return products.filter(product => {
            const { title } = product;
            return (title.toLowerCase().includes(searchQuery.toLowerCase()));
        });
    }
}

function getProductsOnCategory(products)
{
    const { selectedCategory } = state;
    return products.filter(product => selectedCategory === 'all' || product.category === selectedCategory );
}

export function getProcessedProducts()
{
    let processedProducts = state.products;

    processedProducts =  getProductsOnSearch(processedProducts);
    
    processedProducts = getProductsOnCategory(processedProducts);

    return processedProducts;
}