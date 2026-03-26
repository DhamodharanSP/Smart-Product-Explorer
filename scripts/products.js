import { state } from "./state.js";
import { renderPage } from "./script.js";

export async function loadProducts()
{
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        state.products = data;
        state.loading = false;
        console.log(state.products);
    }
    catch(error) {
        state.error = error;
        state.loading = false;
    }
    
    renderPage();
}