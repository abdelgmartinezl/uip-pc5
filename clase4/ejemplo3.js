"use strict";

// let a = 2;

// switch (a) {
//     case 2:
//     case 3:
//         alert("No sirve");
//         break;
//     case 4:
//         alert("Puede ser");
//         break;
//     default:
//         alert("No aplica");
//         break;
// }

// let b = prompt("Introduzca un valor: ")

// switch(b) {
//     case '0':
//     case '1':
//         alert("Uno o cero");
//         break;
//     case '2':
//         alert('Dos');
//         break;
//     case 3:
//         alert('No se ejecuta nunca');
//         break;
//     default:
//         alert('Ni idea de que valor es');
//         break;
// }

// let nombre = 'Viviana';

// function mostrarMensaje(texto="Llego") {
//     nombre = 'Petra';

//     let mensaje = texto + ': ' + nombre;

//     alert(mensaje);
// }

// alert(nombre);
// mostrarMensaje('En el mar esta');
// mostrarMensaje();
// alert(nombre);

// function sumar(x, y) {
//     return x + y
// }

// let a = Number(prompt("Sumando 1: "))
// let b = +prompt("Sumando 2: ")

// let resultado = sumar(a,b);
// alert(resultado);

// function validarEdad(edad) {
//     if (edad >= 18) {
//         return true;
//     } else {
//         return confirm("Tienes permiso de tus papas?");
//     }
// }

// let edad = +prompt("Cual es tu edad?", 18);

// if (validarEdad(edad)) {
//     alert("Bievenido a Pharaohs");
// } else {
//     alert("Anda a dormir, lapecillo");
// }

// function hacerNada() {
// }

// alert (hacerNada());

// let saludar = function() {
//     alert("Hola amigo");
// }

// saludar()

// function preguntar(pregunta, si, no) { 
//     if (confirm(pregunta)) si()
//     else no();
// }

// preguntar(
//   "Estas de acuerdo con no pasar la materia?",
//   function() { alert("Estas de acuerdo"); },
//   function() { alert("Casi casi"); }
// );

// let saludar = () => alert("Que xopa");
// saludar()



let sietepor = plata => plata * 0.07;
let n = +prompt("Plata", 0.0);
alert(sietepor(n));




function sietepor2(plata) {
    return plata * 0.07;
}
let n2 = +prompt("Plata", 0.0);
alert(sietepor2(n2));