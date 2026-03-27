import { state } from "../data/state.js";
import { sortbyFilters } from "../config.js";

const sortbyOptions = document.querySelector('.js-sortby-options');

export function openSortbyFilter()
{
    sortbyOptions.classList.remove('disabled');
}

export function closeSortbyFilter()
{
    sortbyOptions.classList.add('disabled');
}

export function generateSortbyFilters()
{
    const sortbyOptionFilters = ['default', ...sortbyFilters];
    let content = '';

    sortbyOptionFilters.forEach((sortby) => {
        content += `
            <div class="sortby-option js-sortby-option" data-sortby="${sortby}">${sortby}</div>
        `;
    });

    sortbyOptions.innerHTML = content;
}

const sortOption = document.querySelector('.js-sortby-filter');

export function displaySortOption()
{
    sortOption.textContent = state.sortOption;
}

displaySortOption();