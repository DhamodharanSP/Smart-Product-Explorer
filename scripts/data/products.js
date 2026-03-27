import { state } from "./state.js";
import { renderPage } from "../script.js";
import { generateCategories } from "../utils/filterCategory.js";
import { generateSortbyFilters } from "../utils/filterSortby.js";

export async function loadProducts()
{
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        state.products = data;
        state.loading = false;
    }
    catch(error) {
        state.error = error;
        state.loading = false;
    }
    
    renderPage();

    generateCategories();

    generateSortbyFilters();
}