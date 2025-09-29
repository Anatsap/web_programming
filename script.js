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

const productsWrapperEl = document.getElementById('products-wrapper');
const sortSelect = document.getElementById('sort');
const totalPriceEl = document.getElementById('totalPrice');
const calculatePriceBtn = document.getElementById('calculatePriceBtn');
const searchInput = document.getElementById('search');
const filtersContainer = document.getElementById('filters-container');
const cartCount = document.getElementById('cartCount');

let cartItemCount = 0;

function getFilteredCars() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const checkedCategories = Array.from(filtersContainer.querySelectorAll('input[type="checkbox"]:checked'))
    .map(input => input.id.toLowerCase());

  let filtered = cars.filter(car => {
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm);
    const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(car.type.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const sortValue = sortSelect.value;
  if (sortValue === 'high') filtered.sort((a, b) => b.price - a.price);
  else if (sortValue === 'low') filtered.sort((a, b) => a.price - b.price);

  return filtered;
}

function renderCars() {
  const filteredCars = getFilteredCars();
  productsWrapperEl.innerHTML = '';
  filteredCars.forEach(car => {
    const carEl = createProductElement(car);
    productsWrapperEl.appendChild(carEl);
  });
}

function createProductElement(car) {
  const productEl = document.createElement('div');
  productEl.className = 'item space-y-2';

  productEl.innerHTML = `
    <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border">
      <img src="${car.img}" alt="${car.brand}" class="object-cover" />
      <span class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Edit</span>
    </div>
    <p class="text-xl font-semibold">${car.brand}</p>
    <p>Type of car: <strong>${car.type}</strong></p>
    <p>Engine power: <strong>${car.engine_power} hp</strong></p>
    <p>Max speed: <strong>${car.max_speed} km/h</strong></p>
    <strong class="text-lg">$${car.price.toLocaleString()}</strong>
  `;

  productEl.querySelector('.status').addEventListener('click', () => {
    if (productEl.querySelector('.status').classList.contains('added')) {
      productEl.querySelector('.status').classList.remove('added');
      productEl.querySelector('.status').innerText = 'Edit';
      productEl.querySelector('.status').classList.remove('bg-red-600');
      productEl.querySelector('.status').classList.add('bg-black');
      cartItemCount--;
    } else {
      productEl.querySelector('.status').classList.add('added');
      productEl.querySelector('.status').innerText = 'Remove From Cart';
      productEl.querySelector('.status').classList.remove('bg-black');
      productEl.querySelector('.status').classList.add('bg-red-600');
      cartItemCount++;
    }
    cartCount.innerText = cartItemCount;
  });

  return productEl;
}


function calculatePrice() {
  const filteredCars = getFilteredCars();
  const total = filteredCars.reduce((acc, car) => acc + car.price, 0);
  totalPriceEl.innerHTML = `<h3>Total price of cars: <strong>${formatMoney(total)}</strong></h3>`;
}

function formatMoney(amount) {
  return '$' + amount.toLocaleString();
}

sortSelect.addEventListener('change', renderCars);
searchInput.addEventListener('input', renderCars);
filtersContainer.addEventListener('change', renderCars);
calculatePriceBtn.addEventListener('click', calculatePrice);


renderCars();
