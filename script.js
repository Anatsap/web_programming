class Car {
  constructor(engine_power, brand, max_speed, img, type, price) {
    this.engine_power = engine_power;
    this.brand = brand;
    this.max_speed = max_speed;
    this.img = img;
    this.type = type;
    this.price = price;
  }
}
const cars = [
  new Car(150, "Toyota", 220, "images/sedan.svg", "sedan", 25000),
  new Car(300, "BMW", 280, "images/sport1.svg", "sport", 50000),
  new Car(200, "Audi", 250, "images/sedan1.svg", "sedan", 40000),
  new Car(300, "BMW", 280, "images/coupe1.svg", "coupe", 50000),
  new Car(200, "Audi", 250, "images/suv1.svg", "SUV", 40000),
  new Car(180, "Ford", 200, "images/truck1.svg", "truck", 30000),
  new Car(160, "Honda", 210, "images/minivan1.svg", "minivan", 27000),
];
const productsEls = [];

function renderCars() {
    productsWrapperEl.innerHTML = '';
    productsEls.length = 0;

    cars.forEach((car) => {
      const carEl = createProductElement(car);
      productsEls.push(carEl);
      productsWrapperEl.appendChild(carEl);

  });
}

const sortSelect = document.getElementById('sort');
const main = document.querySelector('.main-content');
const totalPriceEl = document.getElementById('totalPrice');
const calculatePriceBtn = document.getElementById('calculatePriceBtn');
const productsWrapperEl = document.getElementById('products-wrapper');



sortSelect.addEventListener('change', () => {
  const value = sortSelect.value;
  if (value === 'high') {
    cars.sort((a, b) => b.price - a.price);
  } else if (value === 'low') {
    cars.sort((a, b) => a.price - b.price);
  }
  renderCars();
});

function calculatePrice() {
  const money = cars.reduce((acc, car) => acc + car.price, 0);
  totalPriceEl.innerHTML = `<h3>Total price of cars: <strong>${formatMoney(money)}</strong></h3>`;
}
calculatePriceBtn.addEventListener('click', calculatePrice);
function formatMoney(amount) {
  return '$' + amount.toLocaleString();
}
renderCars();

const checkEls = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');

let cartItemCount = 0;

filtersContainer.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);


function createProductElement(product) {
  const productEl = document.createElement('div');

  productEl.className = 'item space-y-2';

  productEl.innerHTML = `<div
    class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border"
  >
    <img
      src="${product.img}"
      alt="${product.brand}"
      class="object-cover"
    />
    <span
      class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
      >Edit</span
    >
  </div>
    <p class="text-xl font-semibold">${product.brand}</p>
    <p>Type of car: <strong>${product.type}<strong></p>
    <p>Engine power: <strong>${product.engine_power} hp</strong></p>
    <p>Max speed: <strong>${product.max_speed} km/h</strong></p>
    <strong class="text-lg">$${product.price.toLocaleString()}</strong>
  `;
  

  productEl.querySelector('.status').addEventListener('click', addToCart);

  return productEl;
}

function addToCart(e) {
  const statusEl = e.target;

  if (statusEl.classList.contains('added')) {
    statusEl.classList.remove('added');
    statusEl.innerText = 'Edit';
    statusEl.classList.remove('bg-red-600');
    statusEl.classList.add('bg-gray-800');

    cartItemCount--;
  } else {
    statusEl.classList.add('added');
    statusEl.innerText = 'Remove From Cart';
    statusEl.classList.remove('bg-gray-800');
    statusEl.classList.add('bg-red-600');

    cartItemCount++;
  }

  cartCount.innerText = cartItemCount.toString();
}
function filterProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const checkedCategories = Array.from(checkEls)
    .filter((check) => check.checked)
    .map((check) => check.id);

  productsEls.forEach((productEl, index) => {
    const product = cars[index];
    const matchesSearchTerm = product.brand.toLowerCase().includes(searchTerm);
    const isInCheckedCategory =
      checkedCategories.length === 0 ||
      checkedCategories.includes(product.type);

    if (matchesSearchTerm && isInCheckedCategory) {
      productEl.classList.remove('hidden');
    } else {
      productEl.classList.add('hidden');
    }
  });
}