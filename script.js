const products = [
    { name: "Cuaderno", price: "$3500", img: "img/producto4.jpg" },
    { name: "Resaltadores", price: "$500", img: "img/producto5.jpg" },
    { name: "Señaladores", price: "$1500", img: "img/producto3.jpg" },
    { name: "Pines", price: "$200", img: "img/producto2.jpg" },
    { name: "Cuadernos para colorear", price: "$300", img: "img/producto1.jpg" },
    { name: "Stickers", price: "$80 c/u", img: "img/stickers1.jpg" },
    { name: "Remera GOKU", price: "$4000", img: "img/remera1.jpg" },
    { name: "Remera SITCH", price: "$2000", img: "img/remera2.jpg" },
    { name: "Combo Rompecabezas", price: "$6000", img: "img/producto6.jpg" },
    { name: "Botella", price: "$10000", img: "img/producto8.jpg" },
    { name: "Remera GATO", price: "$4000", img: "img/remera3.jpg" },
    { name: "Vaso NOB", price: "$9000", img: "img/producto7.jpg" },
    // Puedes añadir más productos aquí
];

let currentIndex = 0;
const productsPerPage = 8;

function loadProducts() {
    const grid = document.getElementById('product-grid');
    
    for (let i = currentIndex; i < currentIndex + productsPerPage && i < products.length; i++) {
        const product = products[i];

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        
        grid.appendChild(card);
    }

    currentIndex += productsPerPage;

    // Ocultar el botón si no hay más productos que cargar
    if (currentIndex >= products.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

document.getElementById('load-more').addEventListener('click', loadProducts);

// Cargar los primeros productos al cargar la página
window.onload = loadProducts;

function filterProducts() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const productGrid = document.getElementById('product-grid');

    // Asegúrate de que productGrid no sea null
    if (productGrid) {
        const products = productGrid.getElementsByClassName('card');
        for (let i = 0; i < products.length; i++) {
            const productName = products[i].getElementsByTagName('h3')[0];
            if (productName) {
                const txtValue = productName.textContent || productName.innerText;
                products[i].style.display = txtValue.toLowerCase().includes(filter) ? '' : 'none';
            }
        }
    } else {
        console.error("Element with id 'product-grid' not found.");
    }
}
