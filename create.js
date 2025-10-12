document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-car-form');
  const params = new URLSearchParams(window.location.search);
  const carId = params.get('id');


  if (carId) {
    fetch(`http://127.0.0.1:5000/api/cars/${carId}`)
      .then(res => res.json())
      .then(car => {
        document.getElementById('brand-input').value = car.brand;
        document.getElementById('power-input').value = car.engine_power;
        document.getElementById('speed-input').value = car.max_speed;
        document.getElementById('img-input').value = car.img;
        document.getElementById('type-input').value = car.type;
        document.getElementById('price-input').value = car.price;
        document.querySelector('h1').innerText = 'Edit Car';
        form.querySelector('button').innerText = 'Save Changes';
      });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const newCar = {
      brand: document.getElementById('brand-input').value.trim(),
      engine_power: Number(document.getElementById('power-input').value),
      max_speed: Number(document.getElementById('speed-input').value),
      img: document.getElementById('img-input').value.trim(),
      type: document.getElementById('type-input').value.trim().toLowerCase(),
      price: Number(document.getElementById('price-input').value)
    };

    if (carId) {
      fetch(`http://127.0.0.1:5000/api/cars/${carId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCar)
      })
        .then(res => res.json())
        .then(() => {
          localStorage.removeItem('editId');
          window.location.href = 'index.html';
        })
        .catch(err => console.error('Error updating car:', err));
    } else {
      fetch('http://127.0.0.1:5000/api/cars/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCar)
      })
        .then(res => res.json())
        .then(() => window.location.href = 'index.html')
        .catch(err => console.error('Error creating car:', err));
    }
  });
});

