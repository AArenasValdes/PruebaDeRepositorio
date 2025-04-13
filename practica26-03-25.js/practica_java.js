// Crear Variable para mensaje

const mensaje = document.getElementById('mensaje');
const button = document.getElementById('cambiarDescuento');


// Crear variable de descuento
let descuentoInicial;

const descuentoPredeterminado = 10;

let descuentoActual = descuentoInicial ?? descuentoPredeterminado
mensaje.textContent = `El descuento es del ${descuentoActual}%`

button.addEventListener('click',() => {
    let descuentoIngresado = prompt("Ingrese el descuento que desea: ")
    descuentoIngresado = Number(descuentoIngresado)
    descuentoActual = descuentoIngresado ?? descuentoPredeterminado
    mensaje.textContent = `El descuento es del ${descuentoActual}%`

})



