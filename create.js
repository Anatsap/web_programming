document.getElementById("createCarBtn").addEventListener("click", () => {
    const newCar = {
      brand: document.getElementById("brand").value,
      engine_power: parseInt(document.getElementById("engine_power").value),
      max_speed: parseInt(document.getElementById("max_speed").value),
      img: document.getElementById("img").value,
      type: document.getElementById("type").value,
      price: parseInt(document.getElementById("price").value),
    };
  
    const cars = JSON.parse(localStorage.getItem("cars") || "[]");
  
    cars.unshift(newCar);
  
    localStorage.setItem("cars", JSON.stringify(cars));
  
    window.location.href = "index.html";
  });


  