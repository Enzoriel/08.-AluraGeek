const boton = document.querySelector("[data-limpiar]");
const inputs = document.querySelectorAll("[required]");

function limpiarDatos() {
  inputs.forEach((input) => (input.value = ""));
}

boton.addEventListener("click", () => {
  limpiarDatos();
});
