const url = "http://localhost:3000/producto";

async function obtenerProductos() {
  const conexion = await fetch(url);
  const conversion = await conexion.json();
  return conversion;
}

async function agregarProducto(titulo, precio, imagen) {
  const conexion = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      imagen: imagen,
      titulo: titulo,
      precio: precio,
    }),
  });
  const conversion = conexion.json();

  return conversion;
}

async function eliminarProducto(id) {
  const conexion = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  const conversion = conexion.json();

  return conversion;
}

export const conexionApi = {
  obtenerProductos,
  agregarProducto,
  eliminarProducto,
};
