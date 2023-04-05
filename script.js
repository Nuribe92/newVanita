let stockProducts = [
    {
        id: 1,
        nombre: "Rubor y labial velvet beauty Glazed",
        precio: 15000,
        descripcion: "xxx1",
        cantidad: 1,
        img: 'img\ContornoCupcake-removebg-preview.png'
    },
    {
        id: 2,
        nombre: "Soft Lips Individual",
        precio: 6000,
        descripcion: "xxx2",
        cantidad: 1,
        img: 'img\correctoYTratamiento-removebg-preview.png'
    },
    {
        id: 3,
        nombre: "Contorno Cupcake",
        precio: 15000,
        descripcion: "xxx3",
        cantidad: 1,
        img: '../static/imgvid/ContornoCupcake.jpg'
    },
    {
        id: 4,
        nombre: "Espuma Desmaquillante",
        precio: 25000,
        descripcion: "xxx4",
        cantidad: 1,
        img: '../static/imgvid/espumaDesmaquillante.jpg'
    },
    {
        id: 5,
        nombre: "Polvo Traslucido",
        precio: 12000,
        descripcion: "xxx5",
        cantidad: 1,
        img: '../static/imgvid/polvoTraslucido.jpg'
    },
    {
        id: 6,
        nombre: "Polvo Suelto Trendy",
        precio: 20000,
        descripcion: "xxx6",
        cantidad: 1,
        img: '../static/imgvid/polvosSueltos.jpg'
    },
    {
        id: 7,
        nombre: "Corrector + Tratamiento Trendy",
        precio: 20000,
        descripcion: "xxx7",
        cantidad: 1,
        img: '../static/imgvid/correctoYTratamiento.jpg'
    },
    {
        id: 8,
        nombre: "Lapiz De Cejas ",
        precio: 10000,
        descripcion: "xxx8",
        cantidad: 1,
        img: '../static/imgvid/lapizDeCejas.jpg'
    },
    {
        id: 9,
        nombre: "Delineador Doble Trendy",
        precio: 15000,
        descripcion: "xxx9",
        cantidad: 1,
        img: '../static/imgvid/delineadorDobleTrendy.jpg'
    },
    {
        id: 10,
        nombre: "Kit de Cejas Trendy",
        precio: 18000,
        descripcion: "xxx10",
        cantidad: 1, 
        img: '../static/imgvid/kitDeCejas.jpg'
    }
]

function showProducts(){
    let main = document.getElementById("container");

    let html = "";
    stockProducts.forEach(product => {
        html += `
        <div class="products">
        <img src="${product.img}" alt="${product.nombre}"
        <p>${product.descripcion}</p>
        <span class="precio">$${product.precio.toFixed(2)}</span>
        <button class="button-buy">Comprar</button>
        </div>
        `
    })
    main.innerHTML = html;
}
