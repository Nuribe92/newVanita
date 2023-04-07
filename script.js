let stockProducts = [
    {
        id: 1,
        nombre: "Rubor y labial velvet beauty Glazed",
        precio: 15000,
        descripcion: "transparent juntas de la siguiente manera:",
        cantidad: 1,
        img: 'img/imagenesProductos/RuborYLabialVelvet-removebg-preview.png'
    },
    {
        id: 2,
        nombre: "Soft Lips Individual",
        precio: 6000,
        descripcion: "xxx2",
        cantidad: 1,
        img: 'img/imagenesProductos/Soft-Lips-removebg-preview.png'
    },
    {
        id: 3,
        nombre: "Contorno Cupcake",
        precio: 15000,
        descripcion: "xxx3",
        cantidad: 1,
        img: 'img/imagenesProductos/ContornoCupcake-removebg-preview.png'
    },
    {
        id: 4,
        nombre: "Espuma Desmaquillante",
        precio: 25000,
        descripcion: "xxx4",
        cantidad: 1,
        img: 'img/imagenesProductos/espumaDesmaquillante-removebg-preview.png'
    },
    {
        id: 5,
        nombre: "Polvo Traslucido",
        precio: 12000,
        descripcion: "xxx5",
        cantidad: 1,
        img: 'img/imagenesProductos/polvoTraslucido-removebg-preview (2).png'
    },
    {
        id: 6,
        nombre: "Polvo Suelto Trendy",
        precio: 20000,
        descripcion: "xxx6",
        cantidad: 1,
        img: 'img/imagenesProductos/polvosSueltos-removebg-preview.png'
    },
    {
        id: 7,
        nombre: "Corrector + Tratamiento Trendy",
        precio: 20000,
        descripcion: "xxx7",
        cantidad: 1,
        img: 'img/imagenesProductos/correctoYTratamiento-removebg-preview.png'
    },
    {
        id: 8,
        nombre: "Lapiz De Cejas ",
        precio: 10000,
        descripcion: "xxx8",
        cantidad: 1,
        img: 'img/imagenesProductos/lapizDeCejas-removebg-preview.png'
    },
    {
        id: 9,
        nombre: "Delineador Doble Trendy",
        precio: 15000,
        descripcion: "xxx9",
        cantidad: 1,
        img: 'img/imagenesProductos/delineadorDobleTrendy-removebg-preview.png'
    },
    {
        id: 10,
        nombre: "Kit de Cejas Trendy",
        precio: 18000,
        descripcion: "xxx10",
        cantidad: 1, 
        img: 'img/imagenesProductos/kitDeCejas-removebg-preview.png'
    }
];

const container = document.getElementById("container");
const firstProductDiscount = document.getElementById("discount1")
const secondProductDiscount = document.getElementById("discount2")




function showProducts(){
    stockProducts.forEach(product => {
        const div = document.createElement("div")
        div.classList.add('products')
        div.innerHTML = `
        <div class="card bg-transparent border-dark">
        <img class="card-img-top" src="${product.img}" alt="${product.nombre}">
        <div class="card-body">
        <h5 class="card-title">${product.nombre}</h5>
        <p class="card-text">${product.descripcion}</p>
        <span class="precio">$${product.precio.toFixed(2)}</span>
        </div>
        <div class="card-footer border-dark">
        <a class="btn btn-light">Comprar</a>
        </div>
        </div>
      `;
      container.appendChild(div)

    });
    
}
showProducts();

window.addEventListener("load", function() {
    // Código a ejecutar cuando la página ha terminado de cargarse
  });
  let idOfProfuct1 = 1;
  let idOfProduct2 = 2;

  function addDiscount(){
        let id1 = ""  
  }