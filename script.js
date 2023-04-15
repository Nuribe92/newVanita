document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // }else{
      //   entry.target.classList.remove('show');
      // }
    });
  });

  document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
  });
});
//ARRAY OF PRODUCTS
let stockProducts = [
  {
    id: 1,
    nombre: "Rubor y labial velvet beauty Glazed",
    precio: 15000,
    descripcion:
      "Tinta en textura cremosa y finalidad mate. Se difumina con facilidad. Larga duración.",
    cantidad: 1,
    img: "img/imagenesProductos/RuborYLabialVelvet-removebg-preview.png",
  },
  {
    id: 2,
    nombre: "Soft Lips Individual",
    precio: 6000,
    descripcion: "xxx2",
    cantidad: 1,
    img: "img/imagenesProductos/Soft-Lips-removebg-preview.png",
  },
  {
    id: 3,
    nombre: "Contorno Cupcake",
    precio: 15000,
    descripcion: "Contorno, Iluminador y rubor en un solo producto",
    cantidad: 1,
    img: "img/imagenesProductos/ContornoCupcake-removebg-preview.png",
  },
  {
    id: 4,
    nombre: "Espuma Desmaquillante",
    precio: 25000,
    descripcion: "xxx4",
    cantidad: 1,
    img: "img/imagenesProductos/ESPUMA-DESMAQUILLANTE-2-removebg-preview.png",
  },
  {
    id: 5,
    nombre: "Polvo Compacto Traslucido",
    precio: 12000,
    descripcion:
      "Sella la piel sin aportar color. Tambien es perfecto para retocar el maquillaje, pues quita el efecto graso de la piel y matifica sin aportar mas pigmento.",
    cantidad: 1,
    img: "img/imagenesProductos/polvoTraslucido-removebg-preview (2).png",
  },
  {
    id: 6,
    nombre: "Polvo Suelto Trendy",
    precio: 20000,
    descripcion:
      "Polvo micro pulverizado con pigmento de acuerdo al tono imagen tono 1 al 3 de izquierda a derecha",
    cantidad: 1,
    img: "img/imagenesProductos/polvosSueltos-removebg-preview.png",
  },
  {
    id: 7,
    nombre: "Corrector + Tratamiento Trendy",
    precio: 20000,
    descripcion: "xxx7",
    cantidad: 1,
    img: "img/imagenesProductos/correctoYTratamiento-removebg-preview.png",
  },
  {
    id: 8,
    nombre: "Lapiz De Cejas ",
    precio: 10000,
    descripcion: "xxx8",
    cantidad: 1,
    img: "img/imagenesProductos/lapizDeCejas-removebg-preview.png",
  },
  {
    id: 9,
    nombre: "Delineador Doble Cat eye Trendy",
    precio: 15000,
    descripcion:
      "Delineador con doble punta, una punta con sello para hacer el final del delineado y la otra punta con delineador punta plumón tradicional",
    cantidad: 1,
    img: "img/imagenesProductos/delineadorDobleTrendy-removebg-preview.png",
  },
  {
    id: 10,
    nombre: "Kit de Cejas Trendy",
    precio: 18000,
    descripcion:
      "Kit de cejas con 2 tonos en betún y dos tonos en pigmento en polvo",
    cantidad: 1,
    img: "img/imagenesProductos/kitDeCejas-removebg-preview.png",
  },
  {
    id: 11,
    nombre: "Corrector Profesionall Trendy Magic Concealer",
    precio: 12000,
    descripcion:
      "Cobertura media/alta. Textura IDEAL para todo tipo de piel, no es muy matter, ni tampoco muy hidratante, es intermedio y bastante universal",
    cantidad: 1,
    img: "img/imagenesProductos/CORRECTOR-PROFESIONAL-TRENDY-MAGIC-CONCEALER-REF-C05-2-1-removebg-preview.png",
  },
  {
    id: 12,
    nombre: "Tónico Agua de Rosas",
    precio: 20000,
    descripcion:
      "Extracto de rosas y manzanilla en alta concentracion, por eso nuestra formula se ha posicionado como una de las mejores del mercado ya que estos dos ingredientes juntos hidratana a profundidad la piel, y controloan brillo durante el dia, mejorando en mediano plazo el aspecto de la piel unificado el tono, calmando alergias o imperfecciones, emparejando el tono de la piel, y ayuda a prevenir y tratar el acné.",
    cantidad: 1,
    img: "img/imagenesProductos/Tónico-de-Rosas-Agua-de-Rosas-Trendy-240ml-Grande-2-removebg-preview.png",
  },
  {
    id: 13,
    nombre: "Iluminador Liquido Oro Rosa",
    precio: 12000,
    descripcion:
      "Fórmula fluida y sedosa, se adhiere muy bien a la piel, alta pigmentacion y larga duración.",
    cantidad: 1,
    img: "img/imagenesProductos/ILUMINADOR-LIQUIDO-BEAUTY-GLAZED-REF-B93-6-1-removebg-preview.png",
  },
  {
    id: 14,
    nombre: "Iluminador Liquido Dorado",
    precio: 12000,
    descripcion:
      "Fórmula fluida y sedosa, se adhiere muy bien a la piel, alta pigmentacion y larga duración.",
    cantidad: 1,
    img: "img/imagenesProductos/ILUMINADOR-LIQUIDO-BEAUTY-GLAZED-DORADO-REF-B93-1-removebg-preview.png",
  },
  {
    id: 15,
    nombre: "Pestañina a prueba de agua",
    precio: 20000,
    descripcion:
      "Pestañina con formula a prueba de agua, facil de retirar. 5 cepillos diferentes con acabados dependiendo de tu necesidad.",
    cantidad: 1,
    img: "img/imagenesProductos/ILUMINADOR-LIQUIDO-BEAUTY-GLAZED-DORADO-REF-B93-1-removebg-preview.png",
  },
  {
    id: 16,
    nombre: "Lápiz delineador de ojos Negro",
    precio: 12000,
    descripcion:
      "Textura en gel de rapido secado, resistente al agua y a transferencias, es retractil y se desliza facilmente.",
    cantidad: 1,
    img: "img/imagenesProductos/LAPIZ-DE-OJOS-NEGRO-TRENDY-REF-EY15-2-removebg-preview.png",
  },
  {
    id: 17,
    nombre: "Lápiz delineador de ojos Café",
    precio: 12000,
    descripcion:
      "Textura en gel de rapido secado, resistente al agua y a transferencias, es retractil y se desliza facilmente.",
    cantidad: 1,
    img: "img/imagenesProductos/LAPIZ-DE-OJOS-CAFE-TRENDY-REF-EY17-3-removebg-preview.png",
  },
  {
    id: 18,
    nombre: "Gel Fijador de cejas Trendy",
    precio: 15000,
    descripcion:
      "Gel transparente que ayuda a peiinar y fijar tu cejas durante todo el dia. Puedes hacer técnicas organicas o tradicionales (Según cómo desees peinar los pelitos de tus cejas).",
    cantidad: 1,
    img: "img/imagenesProductos/ILUMINADOR-LIQUIDO-BEAUTY-GLAZED-DORADO-REF-B93-1-removebg-preview.png",
  },
  {
    id: 19,
    nombre: "Lápiz de Cejas Softly",
    precio: 10000,
    descripcion:
      "Tiene dos puntas, en un lado está el lápiz para cejas y en otro lado está el cepillo para peinarlas. Su punta es ultra precisa y de 1.5mm, lo cual simula los pelitos de forma Natural. Su fórmula es muy suave y desliza perfecto al contacto con la piel",
    cantidad: 1,
    img: "img/imagenesProductos/LAPIZ-PARA-CEJAS-SOFTLY-BEAUTY-GLAZED-REF-B121-2-removebg-preview.png",
  },
  {
    id: 20,
    nombre: "Lápiz fijador de cejas",
    precio: 15000,
    descripcion:
      "¡Cejas Perfectas en minutos! Un producto perfecto para un acabado muy natural, NO fija con fuerza tus cejas, las ayuda a peinar con más facilidad. Su textura no es pesada, ni densa. Se deja manejar fácilmente.",
    cantidad: 1,
    img: "img/imagenesProductos/LAPIZ-FIJADOR-DE-CEJAS-TRENDY-REF-LP09-4-removebg-preview.png",
  },
  {
    id: 21,
    nombre: "Paleta de Sombras Perfect Neutral",
    precio: 30000,
    descripcion:
      "Tonos tierra y cálidos, acabado mate y satinado, calidad profesional y excelente pigmentación.",
    cantidad: 1,
    img: "img/imagenesProductos/SOMBRA-PERFECT-NEUTRAL-BEAUTY-GLAZED-REF-B27-4-removebg-preview.png",
  },
  {
    id: 22,
    nombre: "Paleta de Sombras Champagne",
    precio: 30000,
    descripcion:
      "Cuenta con 14 tonos mate y 7 tonos satinados, los tonos mate te ayudarán a crear transiciones y los satinados darán luz a tu mirada.",
    cantidad: 1,
    img: "img/imagenesProductos/SOMBRA-PERFECT-NEUTRAL-BEAUTY-GLAZED-REF-B27-4-removebg-preview.png",
  },
  {
    id: 23,
    nombre: "Brocha Individual Mini para base",
    precio: 15000,
    descripcion:
      "Ideal para lograr una aplicacion uniforme de la base, úsala con productos en crema o liquidos. Fabricada con pelo sintético y mango de madera.",
    cantidad: 1,
    img: "img/imagenesProductos/Brocha_mini_para_base-removebg-preview.png",
  },
  {
    id: 24,
    nombre: "Brocha Individual Mini para contorno y rubor",
    precio: 12000,
    descripcion:
      "Por su forma angular es ideal para aplicar productos en polvo como rubor, contorno o bronceador. Fabricada con pelo sintético y mango de madera.",
    cantidad: 1,
    img: "img/imagenesProductos/Brocha_mini_para_contorno_y_rubor-removebg-preview.png",
  },
  {
    id: 25,
    nombre: "Brocha Individual Mini para polvos",
    precio: 15000,
    descripcion:
      "Ideal para lograr una aplicación de polvo uniforme en el rostro, úsala con productos en polvo como rubor, polvo compacto o traslúcido. Fabricada con pelo sintético y mango de madera.",
    cantidad: 1,
    img: "img/imagenesProductos/Brocha_mini_para_polvos-removebg-preview.png",
  },
  {
    id: 26,
    nombre: "Kit de brochas para Ojos",
    precio: 15000,
    descripcion:
      "¡Este Kit es un superbásico para tu maquillaje diario!, Incluye 1 difuminadora, 1 angular y 1 plana",
    cantidad: 1,
    img: "img/imagenesProductos/KIT-BROCHA-TRENDY-OJOS-X3-GENÉRICA-BT06-3-removebg-preview.png",
  },
  {
    id: 27,
    nombre: "Serum Crecimiento de Pestañas",
    precio: 30000,
    descripcion:
      "¡Logra las pestañas de tus sueños con nuetros Serum para pestañas Trendy! COntiene Mezclas de ingredientes botánicos que estimulan el crecimiento de tus pestañas, refuerza la estructura capilar y previene la caida de tus pestañas y estimula la síntesis de queratina, aportando elasticidad, resistencia y brillo.",
    cantidad: 1,
    img: "img/imagenesProductos/serum-de-pestañas-trendy-removebg-preview.png",
  },
  {
    id: 28,
    nombre: "Separador de pestañas",
    precio: 15000,
    descripcion:
      "El mejor Accesorio para pestañas perfectas, una vez lo pruebas, se convierte en tu aliado, hecho en acero quirúrgico de excelente calidad y separar las pestañas evitando grumos, dando maximo alargamiento y volumen.",
    cantidad: 1,
    img: "img/imagenesProductos/Separador_de_pestañas-removebg-preview.png",
  },
  {
    id: 29,
    nombre: "Dilusor de Sombras",
    precio: 15000,
    descripcion:
      "Convierte tus sombras en polvo favoritas en fórmulas fluidas, resistentes al agua y a prueba de manchas. Su textura líquida y liviana intensifica el pigmento para un resultado más impactante y duradero.",
    cantidad: 1,
    img: "img/imagenesProductos/Dilusor-Sombras-Klean-Color-Ref-EP215-2-1-removebg-preview.png",
  },
];
//END OF ARRAY OF PRODUCTS

//GLOBLAL constIABLE
const container = document.getElementById("container");
const firstProductDiscount = document.getElementById("discount1");
const secondProductDiscount = document.getElementById("discount2");
const contenidoCarrito = document.getElementById("modalContent");
const contadorCarrito = document.getElementById("shopping-counter");
const precioTotal = document.getElementById("precioTotal");
const buy = document.getElementsByClassName("buy");

let shoppingCar = [];
//END OF GLOBAL constIABLE

//ADDING ALL PRODUCTS OF CATALOG
function showProducts() {
  stockProducts.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("products");
    div.innerHTML = `
        <div class="card bg-transparent border-dark">
            <img class="card-img-top" src="${product.img}" alt="${
      product.nombre
    }">
            <div class="card-body">
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text text-justify">${product.descripcion}</p>
                <span class="precio"><strong>$${product.precio.toFixed(
                  2
                )}</strong></span>
            </div>
            <div class="card-footer border-dark">
                <a id="add${product.id}" class="btn btn-light buy">Comprar</a>
            </div>
        </div>
      `;
    container.appendChild(div);

    const boton = document.getElementById(`add${product.id}`)

    boton.addEventListener('click', () =>{
        addToCar(product.id)
    })
  });
}
showProducts();
//END ADDING PRODUCTS OF CATALOG

//ADDING 2 PRODUCTS FOR DISCOUNT
function addDiscount(section, id, disc) {
  const discProduct1 = stockProducts.find((product) => product.id === id);
  if (!discProduct1) {
    console.log(`This product does not exits ${id}`);
  }
  const discountDiv = document.createElement("div");
  discountDiv.classList.add("discProducts");
  discountDiv.innerHTML = `
            <div class="card bg-transparent border-dark">
                <h2 class="d-flex text-center justify-content-center">Descuento del ${disc}%</h2><br> 
                <img class="card-img-top" src="${discProduct1.img}" alt="${
    discProduct1.nombre
  }">
                <div class="card-body">
                    <h3 class="card-title d-flex justify-content-center">${
                      discProduct1.nombre
                    }</h3>
                    <h4><span class="precio">Precio Regular: $${
                      discProduct1.precio
                    }</span><h4>
                    <h4><strong>Precio Actual: $${
                      discProduct1.precio - (disc / 100) * discProduct1.precio
                    }</strong></h4>
                </div>
                <div class="card-footer">
                    <a class="btn btn-light d-block text-center">Comprar</a>
                </div>
            </div>
        `;
  section.appendChild(discountDiv);
}
//funcion descuentos (SECCION, ID, DESCUENTO)
addDiscount(firstProductDiscount, 7, 10);
addDiscount(secondProductDiscount, 10, 15);

//END ADDING 2 PRODUCTS FOR DISCOUNT

//START SHOPPING CAR

//funcion para actualizar el carrito cada vez que se agrega un producto
const actualizarCarrito = () => {
  contenidoCarrito.innerHTML = "";
  shoppingCar.forEach((prod) => {
    const div = document.createElement("div");
    div.classList.add("prodInCar");
    div.innerHTML = `
        <div class="row d-flex">
        
        <img id="imgInCar" class="col-3 p-0" src="${prod.img}" alt="${prod.nombre}">
        <p class="col-2 justify-content-center my-auto p-0">${prod.nombre}</p>
        <h5 class="col-2 mx-auto my-auto p-0">Precio Unitario: $${prod.precio}</h5>
        <p class="col-2 mx-auto my-auto p-0"> Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button id="buttonInCar" class="col-1 my-auto mr-5 p-0 boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
      </svg></button>
        
        </div>
        <hr>
    `;
    contenidoCarrito.appendChild(div);
    //localStorage.setItem("shoppingCar", JSON.stringify(shoppingCar));
  });
  contadorCarrito.innerHTML = shoppingCar.length;
  precioTotal.innerHTML = shoppingCar.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
};

const addToCar = (prodId) => {
  const exit = shoppingCar.some((prod) => prod.id === prodId);

  if (exit) {
    const prod = shoppingCar.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++;
      }
    });
  } else {
    const item = stockProducts.find((prod) => prod.id === prodId);
    shoppingCar.push(item);
  }
  actualizarCarrito()
};

//END SHOPPING CAR

//start Modal

//END Modal
