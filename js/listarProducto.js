import { conexionApi } from "./main.js";

function crearCard(imagen, titulo, precio) {
  const card = document.createElement("li");
  card.className = "item__card";
  card.innerHTML = `
    <img src="${imagen}" />
    <p class="titulo__producto">${titulo}</p>
    <p class="precio__producto">${precio}</p>
    `;
  return card;
}

const itemCard = document.querySelector("[data-productos]");

async function listarProductos() {
  const productos = await conexionApi.obtenerProductos();

  productos.forEach((item) => {
    itemCard.appendChild(crearCard(item.imagen, item.titulo, item.precio));
  });
}

listarProductos();
