import { conexionApi } from "./conexionAPI.js";
import { eliminarItem } from "./eliminarProducto.js";

function crearCard(id, imagen, titulo, precio) {
  const card = document.createElement("li");
  card.className = "item__card";
  card.id = id;
  card.innerHTML = `
    <img src="${imagen}" class="item__ico" />
    <p class="titulo__producto">${titulo}</p>
    <div class="precio__productos__contenedor">
    <p class="precio__producto">${precio}</p>
    <img src="../img/eliminar_item.svg" id=${id} class="eliminar"/>
    </div>
    `;
  return card;
}

const itemCard = document.querySelector("[data-productos]");

async function listarProductos() {
  const productos = await conexionApi.obtenerProductos();

  productos.forEach((item) => {
    itemCard.appendChild(crearCard(item.id, item.imagen, item.titulo, item.precio));
  });

  eliminarItem();
}

listarProductos();
