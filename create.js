document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-car-form');
  const editIndex = localStorage.getItem('editIndex');
  let cars = JSON.parse(localStorage.getItem('cars')) || [];

  if (editIndex !== null) {
    const car = cars[editIndex];
    document.getElementById('brand-input').value = car.brand;
    document.getElementById('power-input').value = car.engine_power;
    document.getElementById('speed-input').value = car.max_speed;
    document.getElementById('img-input').value = car.img;
    document.getElementById('type-input').value = car.type;
    document.getElementById('price-input').value = car.price;

    document.querySelector('h1').innerText = 'Edit Car';
    form.querySelector('button').innerText = 'Save Changes';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newCar = {
      brand: document.getElementById('brand-input').value.trim(),
      engine_power: parseInt(document.getElementById('power-input').value),
      max_speed: parseInt(document.getElementById('speed-input').value),
      img: document.getElementById('img-input').value.trim(),
      type: document.getElementById('type-input').value.trim().toLowerCase(),
      price: parseFloat(document.getElementById('price-input').value),
    };

    if (editIndex !== null) {
      cars[editIndex] = newCar;
      localStorage.removeItem('editIndex');
    } else {
      cars.unshift(newCar);
    }

    localStorage.setItem('cars', JSON.stringify(cars));

    window.location.href = 'index.html';
  });
});


