async function obtenerProductos() {
  const conexion = await fetch("http://localhost:3001/producto");
  const conversion = conexion.json();
  return conversion;
}

export const conexionApi = {
  obtenerProductos,
};
