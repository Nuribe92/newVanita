let stockProducts = [
    {
        id: 1,
        nombre: "Rubor y labial velvet beauty Glazed",
        precio: 15000,
        descripcion: "xxx1",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 2,
        nombre: "Soft Lips Individual",
        precio: 6000,
        descripcion: "xxx2",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 3,
        nombre: "Contorno Cupcake",
        precio: 15000,
        descripcion: "xxx3",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 4,
        nombre: "Espuma Desmaquillante",
        precio: 25000,
        descripcion: "xxx4",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 5,
        nombre: "Polvo Traslucido",
        precio: 12000,
        descripcion: "xxx5",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 6,
        nombre: "Polvo Suelto Trendy",
        precio: 20000,
        descripcion: "xxx6",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 7,
        nombre: "Corrector + Tratamiento Trendy",
        precio: 20000,
        descripcion: "xxx7",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 8,
        nombre: "Lapiz De Cejas ",
        precio: 10000,
        descripcion: "xxx8",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 9,
        nombre: "Delineador Doble Trendy",
        precio: 15000,
        descripcion: "xxx9",
        cantidad: 1,
        img: './img/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 10,
        nombre: "Kit de Cejas Trendy",
        precio: 18000,
        descripcion: "xxx10",
        cantidad: 1, 
        img: './img/lapizDeCejas-removebg-preview.png'
    }
];

const container = document.getElementById("container");
function showProducts(){
    stockProducts.forEach(product => {
        const div = document.createElement('div')
        div.classList.add('products')
        div.innerHTML = `
        <img src="${product.img}" alt="${product.nombre}">
        <p>${product.descripcion}</p>
        <span class="precio">$${product.precio.toFixed(2)}</span>
        <button class="button-buy">Comprar</button>
      `;
      console.log("is working1")
        container.appendChild(div)
    });
    console.log("is working");
}

showProducts()