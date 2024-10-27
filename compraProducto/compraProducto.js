const listaDeProductos = [
    { nombre: "Remera GOKU", precio: 4000, img: "../img/remera1.jpg" },
    { nombre: "Remera STITCH", precio: 2000, img: "../img/remera2.jpg" },
    { nombre: "Remera GATO", precio: 4000, img: "../img/remera3.jpg" },
    { nombre: "Cuaderno", precio: 3500, img: "../img/producto4.jpg" },
    { nombre: "Resaltadores", precio: 500, img: "../img/producto5.jpg" },
    { nombre: "Señaladores", precio: 1500, img: "../img/producto3.jpg" },
    { nombre: "Pines", precio: 200, img: "../img/producto2.jpg" },
    { nombre: "Cuadernos para colorear", precio: 300, img: "../img/producto1.jpg" },
    { nombre: "Stickers", precio: 80, img: "../img/stickers1.jpg" },
    { nombre: "Combo Rompecabezas", precio: 6000, img: "../img/producto6.jpg" },
    { nombre: "Botella", precio: 10000, img: "../img/producto8.jpg" },
    { nombre: "Vaso NOB", precio: 9000, img: "../img/producto7.jpg" },
];

const contenedorProductos = document.getElementById("contenedorProductos");
let totalCarrito = 0;

listaDeProductos.forEach((producto, index) => {
    const cardProducto = document.createElement("div");
    cardProducto.classList.add("card-producto");
    cardProducto.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <input type="number" id="cantidadProducto${index}" min="1" value="1">
        <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio}, 'cantidadProducto${index}')">Agregar</button>
    `;
    contenedorProductos.appendChild(cardProducto);
});

function agregarAlCarrito(nombre, precio, idCantidad) {

    const cantidad = document.getElementById(idCantidad).value;
    if (cantidad === NaN || cantidad === "" || cantidad < 1) {
        return alert("Ingrese numero válido.");
    }

    const subtotal = precio * cantidad;
    totalCarrito += subtotal;

    const item = document.createElement('li');
    item.innerHTML = `${nombre} - Cantidad: ${cantidad} - Subtotal: $${subtotal} 
    <button onclick="eliminarDelCarrito(this, ${subtotal})">Eliminar</button><br><br>`;
    document.getElementById('listaCarrito').appendChild(item);
    document.getElementById('totalCarrito').textContent = totalCarrito;
}

function eliminarDelCarrito(boton, subtotal) {
    const item = boton.parentElement;
    item.remove();
    totalCarrito -= subtotal;
    document.getElementById('totalCarrito').textContent = totalCarrito;
}

function finalizarCompra() {
    if (totalCarrito > 0) {
        alert(`¡Compra exitosa! Total: $${totalCarrito}`);
        document.getElementById('listaCarrito').innerHTML = '';
        document.getElementById('totalCarrito').textContent = '0';
        totalCarrito = 0;

        for (let i = 0; i < listaDeProductos.length; i++) {
            document.getElementById(`cantidadProducto${i}`).value = 1;
        }
    } else {
        alert("Tu carrito está vacío.");
    }
}
