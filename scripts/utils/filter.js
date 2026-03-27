import { state } from "../data/state.js";

const categoryOptions = document.querySelector('.js-category-options')

export function openCategoryFilter()
{
    categoryOptions.classList.remove('disabled');
}

export function closeCategoryFilter()
{
    categoryOptions.classList.add('disabled');
}

function getCategories()
{
    const categories = state.products.map(product => product.category);
    return ['all', ...new Set(categories)];
}

export function generateCategories()
{
    const categories = getCategories();
    
    let content = '';

    categories.forEach((category) => {
        content += `
            <div class="category-option js-category-option" data-category="${category}">${category}</div>
        `;
    });

    categoryOptions.innerHTML = content;
}

const selectedCategory = document.querySelector('.js-category-type');

export function displaySelectedCategory()
{
    selectedCategory.textContent = state.selectedCategory;
}

displaySelectedCategory();