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

function getProductsOnSortby(products)
{
    const { sortOption } = state;
    if(sortOption === 'price-low-high')
        return [...products].sort((a,b) => a.price - b.price);
    else if(sortOption === 'price-high-low')
        return [...products].sort((a,b) => b.price - a.price);
    else return products;
}

const productProcessors = [
    getProductsOnSearch,
    getProductsOnCategory,
    getProductsOnSortby
];

export function getProcessedProducts()
{
    return productProcessors.reduce((accumulatedResult, processorFunction) => processorFunction(accumulatedResult) , state.products);
}