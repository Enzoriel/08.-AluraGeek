import { conexionApi } from "./conexionAPI.js";

export function eliminarItem() {
  const botonEliminar = document.querySelectorAll(".eliminar");

  botonEliminar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      conexionApi.eliminarProducto(e.target.id);
    });
  });
}
