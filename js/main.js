//BIENVENIDA A USUARIO
let nombre = prompt("Bienvenid@! Cual es tu nombre?");

function saludo(nombreUsuario) {
    alert("Hola" + " " + nombreUsuario)
};

saludo(nombre);
alert(nombre + ", " + "por consola podras ver los productos que tenemos para vos");

//DEFINICION DE PRODUCTOS
const productos = [
    { codigo: 1 , producto: "jean-kansas", precio: 2200 },
    { codigo: 2, producto: "jean-texas", precio: 2200 },
    { codigo: 3, producto: "jean-washington", precio: 2200 },
    { codigo: 4 , producto: "jean-indiana", precio: 2000 },
    { codigo: 5 , producto: "jean-luisina", precio: 2000 },
    { codigo: 6 , producto: "jean-virginia", precio: 2000 },
    { codigo: 7 , producto: "buzo-hope", precio: 2450 },
    { codigo: 8 , producto: "buzo-rustico-first", precio: 2500 },
    { codigo: 9 , producto: "buzo-rustico-second", precio: 2500 },
];




for(const producto of productos) {
    alert(producto.producto + " " + producto.codigo + " " + "$" + producto.precio)
};

let productoLleva = prompt("Por favor, ingresa el codigo del producto que quieres llevar")

if(productoLleva == 1){
    alert("Lleva jean-kansas")
    alert("Total a pagar $2200")
}else if (productoLleva == 2) {
    alert("Lleva jean-texas")
    alert("Total a pagar $2200")
}else if (productoLleva == 3) {
    alert("Lleva jean-washington")
    alert("Total a pagar $2200")
}else if (productoLleva == 4) {
    alert("Lleva jean-kansas")
    alert("Total a pagar $2000")
}else if (productoLleva == 5) {
    alert("Lleva jean-washington")
    alert("Total a pagar $2000")     
}else if (productoLleva == 6) {
    alert("Lleva jean-kansas")
    alert("Total a pagar $2000")
}else if (productoLleva == 7) {
    alert("Lleva buzo-hope")
    alert("Total a pagar $2450")
}else if (productoLleva == 8) {
    alert("Lleva buzo-rustico-first")
    alert("Total a pagar $2500")
}else if (productoLleva == 9) {
    alert("Lleva buzo-rustico-second")
    alert("Total a pagar $2500")
}else{
    alert("CODIGO INCORRECTO")
}

alert(nombre + " " + "MUCHAS GRACIAS POR TU COMPRA, VOLVE PRONTO")