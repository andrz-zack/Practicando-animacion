alert("Practicing")
// Número total de círculos
const totalCircles = 40;

// Contenedor donde se insertarán
const container = document.getElementById("circles-container");

// Bucle para crear y añadir los círculos
for (let i = 1; i <= totalCircles; i++) {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.setProperty("--p", i);
  container.appendChild(circle);
}