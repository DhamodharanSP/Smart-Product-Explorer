import { renderPage } from "../script.js";

export const state = {
    products: [],
    searchQuery: '',
    selectedCategory: 'all',
    sortOption: 'default',
    loading: true,
    error: null
}

export function setState(updates)
{
    Object.assign(state, updates);
    renderPage();
}