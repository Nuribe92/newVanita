const modalCarrito = document.getElementById('modal-carrito')[0]
const modalContenido = document.getElementById('modal-contenido')[0]
const abrirModal = document.getElementById('shopping-car-button')
const botonCerrar = document.getElementById('cerrarCarrito')

abrirModal.addEventListener('click', () =>{
    modalCarrito.classList.toggle('modal-active')
})

botonCerrar.addEventListener('click', () =>{
    modalCarrito.classList.toggle('modal-active')
})

modalCarrito.addEventListener('click', (event) =>{
    modalCarrito.classList.toggle('modal-active')
})
modalContenido.addEventListener('click', (event) =>{
    event.stopPropagation()
})



