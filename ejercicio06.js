/* 
https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/17-dom.md

progreso
Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora) */

let porcentaje = prompt("Ingrese el porcentaje de progreso");
let div2 = document.getElementById("div2");

let progreso = porcentaje+"%";

div2.style.width = progreso;

let texto = document.getElementById("porcentaje-texto");

texto.textContent = progreso;

if (porcentaje <= 30) {
    div2.style.backgroundColor = "red";
    texto.textContent = progreso;
} else if (porcentaje <= 50) {
    div2.style.backgroundColor ="orange";
    texto.textContent = progreso;
} else if (porcentaje <= 70) {
    div2.style.backgroundColor = "yellow";
    texto.textContent = progreso;
} else if (porcentaje < 100) {
    div2.style.backgroundColor = "green"
} else if (porcentaje = 100) {
    div2.style.backgroundColor = "green"
    texto.textContent = "completado";
}