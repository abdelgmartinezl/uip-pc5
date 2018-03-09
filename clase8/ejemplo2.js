"use strict";

let frutas = ['Mango', 'Yuplon', 'Noni'];
alert( frutas[0] );
frutas[1] = 'Mangotin';
frutas[3] = 'Papaya';
alert( frutas.length );
alert( frutas );

// Funciones para el final del arreglo
alert( frutas.pop() );
alert( frutas );
frutas.push('Pera');
alert( frutas );

// Funciones para el inicio del areglo
alert( frutas.shift() );
alert( frutas );
frutas.unshift('Guaba');
alert( frutas );


let arreglo = ['Manzana', { nombre: 'Pera' }, true, function() { alert("Habla moh!"); }];

alert( arreglo[1].nombre );
arreglo[3]();

// Como hacer una calculadora
let x = +prompt("Que quieres hacer? \n1.Sumar\n2.Restar", 1); //Menu
let a = +prompt("A", 0); //Operando A
let b = +prompt("B", 0); //Operando B
let calculadora = [function(a, b) { alert(a + b) }, function(a,b) { alert(a - b) }]; // Arreglo de funciones
calculadora[x-1](a,b); // Ejecucion de una funcion dentro el arreglo