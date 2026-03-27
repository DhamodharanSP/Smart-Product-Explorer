import { loadProducts } from "./data/products.js";
import { state } from "./data/state.js";
import { getProcessedProducts } from "./utils/processProducts.js";
import { openCategoryFilter, closeCategoryFilter, displaySelectedCategory } from "./utils/filter.js";

const productContainer = document.querySelector('.js-product-container');

loadProducts();

renderPage();

export function renderPage()
{
    let content = '';
    if(state.loading) content = loadingProducts();
    else if(state.error) content = errorLoadingProducts(state.error);
    else content = renderProducts();

    productContainer.innerHTML = content;
}

function loadingProducts()
{
    return '<h1>Products loading</h1>';
}

function errorLoadingProducts(error)
{
    return `<h1>Error ${error}</h1>`;
}

function renderProducts()
{
    const processedProducts = getProcessedProducts();
    if(processedProducts.length === 0) {
        return '<h1>No Products Found</h1>';
    }
    let productsGrid = '';
    processedProducts.forEach((product) => {
        productsGrid += `
            <div class="product">
                <div class="img-container">
                    <img src="${product.image}" alt="bush" class="product-img">
                </div>
                <div class="product-content">
                    <div class="product-title">${product.title}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-rating">
                        <div class="product-stars">${product.rating?.rate ?? 0} star</div>
                        <div class="product-review-count">${product.rating?.count ?? 0}</div>
                    </div>
                    <div class="product-price">$${product.price}</div>
                </div>
            </div>
        `;
    });
    return productsGrid;
}

// Search
const searchInput = document.querySelector('.js-search-input');

searchInput.addEventListener('input', (event) => {
    const inputField = event.target;
    const search = inputField.value;
    state.searchQuery = search.trim();
    renderPage();
});

// Category section
const categoryContainer = document.querySelector('.js-category-section');

categoryContainer.addEventListener('click', (event) => {
    const targetElement = event.target;

    const categoryButton = targetElement.closest('.js-category-btn');
    const categoryOption = targetElement.closest('.js-category-option');

    if(categoryButton) openCategoryFilter();
    else if(categoryOption) {
        const { category } = categoryOption.dataset;
        state.selectedCategory = category;
        displaySelectedCategory();
        closeCategoryFilter();
        renderPage();
    }
});