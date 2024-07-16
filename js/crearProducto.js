import { conexionApi } from "./conexionAPI.js";

const enviar = document.querySelector("[data-enviar]");

async function crearItem() {
  const titulo = document.querySelector("[data-titulo]").value;
  const precioValor = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;
  const precio = `${precioValor},00 $`;

  await conexionApi.agregarProducto(titulo, precio, imagen);
}

enviar.addEventListener("click", () => {
  crearItem();
});
