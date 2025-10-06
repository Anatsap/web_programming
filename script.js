
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://127.0.0.1:5000/cars')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  class Car {
    constructor(engine_power, brand, max_speed, img, type, price) {
      this.engine_power = Number(engine_power || 0);
      this.brand = String(brand || '');
      this.max_speed = Number(max_speed || 0);
      this.img = img || '';
      this.type = String(type || '').toLowerCase();
      this.price = Number(price || 0);
    }
  }

  const defaultCars = [
    new Car(150, "Toyota", 220, "images/sedan.svg", "sedan", 25000),
    new Car(300, "BMW", 280, "images/sport1.svg", "sport", 50000),
    new Car(200, "Audi", 250, "images/sedan1.svg", "sedan", 40000),
    new Car(300, "BMW", 280, "images/coupe1.svg", "coupe", 50000),
    new Car(200, "Audi", 250, "images/suv1.svg", "suv", 40000),
    new Car(180, "Ford", 200, "images/truck1.svg", "truck", 30000),
    new Car(160, "Honda", 210, "images/minivan1.svg", "minivan", 27000),
  ];

  function loadCars() {
    try {
      const raw = localStorage.getItem('cars');
      if (!raw) return defaultCars.slice();
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return defaultCars.slice();
      return parsed.map(c => new Car(c.engine_power, c.brand, c.max_speed, c.img, c.type, c.price));
    } catch (e) {
      console.warn('Помилка читання cars з localStorage — використовую дефолтні', e);
      return defaultCars.slice();
    }
  }

  function saveCars(arr) {
    localStorage.setItem('cars', JSON.stringify(arr));
  }

  let cars = loadCars();

  const productsWrapperEl = document.getElementById('products-wrapper');
  const sortSelect = document.getElementById('sort');
  const totalPriceEl = document.getElementById('totalPrice');
  const calculatePriceBtn = document.getElementById('calculatePriceBtn');
  const searchInput = document.getElementById('search');
  const filtersContainer = document.getElementById('filters-container');
  const cartCount = document.getElementById('cartCount');

  let cartItemCount = 0;

  function getFilteredCars() {
    const searchTerm = (searchInput?.value || '').trim().toLowerCase();
    const checkedCategories = Array.from(filtersContainer?.querySelectorAll('input[type="checkbox"]:checked') || [])
      .map(i => i.id.toLowerCase());

    const filtered = cars.filter(car => {
      const brandMatch = car.brand.toLowerCase().includes(searchTerm);
      const categoryMatch = checkedCategories.length === 0 || checkedCategories.includes(car.type.toLowerCase());
      return brandMatch && categoryMatch;
    });

    const sorted = filtered.slice();
    const sortValue = sortSelect?.value;
    if (sortValue === 'high') sorted.sort((a, b) => Number(b.price) - Number(a.price));
    else if (sortValue === 'low') sorted.sort((a, b) => Number(a.price) - Number(b.price));

    return sorted;
  }

  function renderCars() {
    const list = getFilteredCars();
    productsWrapperEl.innerHTML = '';

    if (!list.length) {
      productsWrapperEl.innerHTML = `<p class="text-center">No cars found.</p>`;
      return;
    }

    list.forEach(car => {
      const el = createProductElement(car);
      productsWrapperEl.appendChild(el);
    });
  }

  function createProductElement(car) {
    const productEl = document.createElement('div');
    productEl.className = 'item space-y-2';

    const imgSrc = car.img || 'images/placeholder.svg';
    productEl.innerHTML = `
      <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border">
        <img src="${imgSrc}" alt="${car.brand}" class="object-cover" />
        <span class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Edit</span>
      </div>
      <p class="text-xl font-semibold">${car.brand}</p>
      <p>Type of car: <strong>${car.type}</strong></p>
      <p>Engine power: <strong>${car.engine_power} hp</strong></p>
      <p>Max speed: <strong>${car.max_speed} km/h</strong></p>
      <strong class="text-lg">$${Number(car.price).toLocaleString()}</strong>
      <p><button class="delete-btn bg-purple-600 text-white px-3 py-1 rounded mt-2">Delete</button></p>

    `;

    const status = productEl.querySelector('.status');
    status.addEventListener('click', () => {
      const index = cars.findIndex(c =>
        c.brand === car.brand &&
        c.engine_power === car.engine_power &&
        c.max_speed === car.max_speed &&
        c.price === car.price
      );
      if (index !== -1) {
        localStorage.setItem('editIndex', index);
        window.location.href = 'create.html';
      }
    });
    const deleteBtn = productEl.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      const index = cars.findIndex(c =>
        c.brand === car.brand &&
        c.engine_power === car.engine_power &&
        c.max_speed === car.max_speed &&
        c.price === car.price
      );

      const resourceIdToDelete = index;
      const url = `http://127.0.0.1:5000/cars/${resourceIdToDelete}`;
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          if (response.status === 204) {
            return null;
          }
          return response.json();
        })
        .then(data => {
          console.log('Resource deleted successfully:', data);
        })
        .catch(error => {
          console.error('Error deleting resource:', error);
        });

      if (index !== -1) {
        cars.splice(index, 1);
        saveCars(cars);
        renderCars();
      }
    });



    return productEl;
  }

  function addNewCar(newCarObj) {
    const car = new Car(newCarObj.engine_power, newCarObj.brand, newCarObj.max_speed, newCarObj.img, newCarObj.type, newCarObj.price);
    cars.unshift(car);
    renderCars();
  }

  function calculatePrice() {
    const filtered = getFilteredCars();
    const total = filtered.reduce((acc, c) => acc + Number(c.price || 0), 0);
    totalPriceEl.innerHTML = `<h3>Total price of cars: <strong>${formatMoney(total)}</strong></h3>`;
  }

  function formatMoney(amount) {
    return '$' + Number(amount || 0).toLocaleString();
  }

  if (sortSelect) sortSelect.addEventListener('change', renderCars);
  if (searchInput) searchInput.addEventListener('input', renderCars);
  if (filtersContainer) filtersContainer.addEventListener('change', renderCars);
  if (calculatePriceBtn) calculatePriceBtn.addEventListener('click', calculatePrice);

  renderCars();

  window.appCars = {
    addNewCar,
    reloadCars: () => { cars = loadCars(); renderCars(); }
  };

});
