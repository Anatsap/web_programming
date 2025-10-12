const API_URL = "http://127.0.0.1:5000/api/cars/";
const TOTAL_PRICE_URL = "http://127.0.0.1:5000/api/cars/total_price/"; 

const productsWrapper = document.getElementById('products-wrapper');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const filtersContainer = document.getElementById('filters-container');
const calculatePriceBtn = document.getElementById('calculatePriceBtn');
const totalPriceDiv = document.getElementById('totalPrice');
function createCarCard(car) {
    const card = document.createElement('div');
    card.classList.add('p-4', 'text-white', 'flex', 'flex-col'); 
    card.innerHTML = `
        <img src="${car.img}" alt="${car.brand}" 
        class="h-full w-full object-contain"
        style="max-width: none;">
        <h3 class="text-2xl font-bold text-white">${car.brand}</h3> 
        <h3 class="text-xl font-bold">${car.type}</h3>
        <p>Engine_power: ${car.engine_power} HP</p>
        <p>Max_speed: ${car.max_speed} km/h</p>
        <p class="text-lg text-white-400">Price: $${car.price.toFixed(2)}</p>
        <div class="mt-20 flex justify-between">
            <button class="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded edit-btn" data-id="${car.id}">
                Edit
            </button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded delete-btn" data-id="${car.id}">
                Delete
            </button>
        </div>
    `;

    card.querySelector('.edit-btn').addEventListener('click', () => {
        window.location.href = `create.html?id=${car.id}`; 
    });

    card.querySelector('.delete-btn').addEventListener('click', () => deleteCar(car.id));

    return card;
}
function getQueryParams() {
    const sort = sortSelect.value;
    const checkedTypes = Array.from(filtersContainer.querySelectorAll('input:checked'))
        .map(input => input.id)
        .join(',');
    const search = searchInput.value.trim();

    const params = new URLSearchParams();
    if (sort) params.append('sort', sort);
    if (checkedTypes) params.append('type', checkedTypes);
    if (search) params.append('search', search);
    
    return params;
}
function loadCars() {
    productsWrapper.innerHTML = '<p class="text-center">...</p>';
    
    const params = getQueryParams();
    const url = `${API_URL}?${params.toString()}`;

    fetch(url)
        .then(res => {
            if (res.status === 404) return [];
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        })
        .then(data => {
            productsWrapper.innerHTML = '';
            if (data.length === 0) {
                productsWrapper.innerHTML = '<p class="text-center text-xl mt-10">Cars not found</p>';
                return;
            }
            const grid = document.createElement('div');
            grid.classList.add('grid', 'grid-cols-1', 'gap-10', 'mt-30'); 
            
            data.forEach(car => {
                grid.appendChild(createCarCard(car));
            });
            productsWrapper.appendChild(grid);
        })
        .catch(err => {
            console.error('Error fetching cars:', err);
            productsWrapper.innerHTML = `<p class="text-center text-xl mt-10 text-red-400">Помилка завантаження даних: ${err.message}</p>`;
        });
}

function deleteCar(id) {
    fetch(`${API_URL}${id}`, {
        method: 'DELETE'
    })
    .then(res => {
        if (res.status === 204 || res.ok) {
            loadCars(); 
        } else {
            return res.json().then(data => { throw new Error(data.message || 'Failed to delete'); });
        }
    })
    .catch(err => console.error('Error deleting car:', err));
}

function calculateTotalPrice() {
    
    const params = getQueryParams();
    const url = `${TOTAL_PRICE_URL}?${params.toString()}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const total = data.total_price;
            totalPriceDiv.innerHTML = `Total price of car: <span class="text-yellow-400 font-bold">$${total.toFixed(2)}</span>`;
        })
        .catch(err => {
            console.error('Error calculating total price:', err);
            totalPriceDiv.innerHTML = '<span class="text-red-400">Error</span>';
        });
}

sortSelect.addEventListener('change', loadCars);
filtersContainer.addEventListener('change', loadCars);
let searchTimeout;
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(loadCars, 300); 
});

calculatePriceBtn.addEventListener('click', calculateTotalPrice);

document.addEventListener('DOMContentLoaded', loadCars);