document.addEventListener("DOMContentLoaded", function(){ 

    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        });
    });
    
    
    document.querySelectorAll('.hidden').forEach((el) => {observer.observe(el)
    });
    });
//ARRAY OF PRODUCTS
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
//END OF ARRAY OF PRODUCTS


//GLOBLAL VARIABLE
const container = document.getElementById("container");
const firstProductDiscount = document.getElementById("discount1")
const secondProductDiscount = document.getElementById("discount2")

//END OF GLOBAL VARIABLE

//ADDING ALL PRODUCTS OF CATALOG
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
//END ADDING PRODUCTS OF CATALOG

//ADDING 2 PRODUCTS FOR DISCOUNT
function addDiscount(section, id, disc){
        
        const discProduct1 = stockProducts.find(product => product.id === id);
        if(!discProduct1){
            console.log(`This product does not exits ${id}`);
        }
        const discountDiv = document.createElement('div');
        discountDiv.classList.add('discProducts');
        discountDiv.innerHTML = `
            <div class="card bg-transparent border-dark">
                <h2 class="d-flex text-center justify-content-center">Descuento del ${disc}%</h2><br> 
                <img class="card-img-top" src="${discProduct1.img}" alt="${discProduct1.nombre}">
                <div class="card-body">
                    <h3 class="card-title d-flex justify-content-center">${discProduct1.nombre}</h3>
                    <h4><span class="precio">Precio Regular: $${discProduct1.precio}</span><h4>
                    <h4><strong>Precio Actual: $${discProduct1.precio - (disc/100) * discProduct1.precio}</strong></h4>
                </div>
                <div class="card-footer">
                    <a class="btn btn-light d-block text-center">Comprar</a>
                </div>
            </div>
        `
        section.appendChild(discountDiv)

  }
//funcion descuentos (SECCION, ID, DESCUENTO)
  addDiscount(firstProductDiscount, 7, 10)
  addDiscount(secondProductDiscount, 10, 15)

//END ADDING 2 PRODUCTS FOR DISCOUNT

