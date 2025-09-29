document.getElementById("createCarBtn").addEventListener("click", () => {
    const newCar = {
      brand: document.getElementById("brand").value,
      engine_power: parseInt(document.getElementById("engine_power").value),
      max_speed: parseInt(document.getElementById("max_speed").value),
      img: document.getElementById("img").value,
      type: document.getElementById("type").value,
      price: parseInt(document.getElementById("price").value),
    };
  
    // Отримуємо існуючі машини з localStorage або створюємо новий масив
    const cars = JSON.parse(localStorage.getItem("cars") || "[]");
  
    // Додаємо нову машину на початок
    cars.unshift(newCar);
  
    // Зберігаємо назад у localStorage
    localStorage.setItem("cars", JSON.stringify(cars));
  
    // Переходимо назад на сторінку зі всіма машинами
    window.location.href = "index.html";
  });


  