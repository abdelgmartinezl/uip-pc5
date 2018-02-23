"use strict";

// MENSAJES EN CONSOLA
//alert("Habla");
//alert(3 + 2 + 1);

// DEFINICION DE VARIABLES
let mensaje;
mensaje = "Wololo";
//alert(mensaje);

let nombre = "Petxra";
let apellido = "Petrovz";
let $_$ = 2000;
// alert(nombre + " " + apellido);
// alert($_$);

const PI = 3.14159;
const miCumple = "01.01.1966";
const MI_CUMPLE = "01.01.1966";

// NUMEROS
let num = 123; // ENTERO
num = 123.456; // DECIMAL
// alert(num/0); // ARROJA Infinity
// alert(Infinity); // ARROJA Infinity
// alert("petra" / 2); // TIRARIA NaN

// CADENAS
nombre = "Petra";
apellido = "Petrov Petrinksi";
let apodo = `${nombre} "La Willa" ${apellido}` 
// alert(apodo);

// BOOLEANOS
let cambioNombre = true;
let cambioApellido = false;
let esMayor = 50 > 4;
// alert(esMayor);

// OTROS VALORES
let edad = null;
edad = undefined;
// alert(edad);

// CONVERSIONES - TONUMBER
// alert("6" / "2");
let str = "123";
// alert(typeof str);
let num2 = Number(str);
//alert(typeof num2);
let abc = true;
//alert(typeof abc);
abc = String(abc);
//alert(typeof abc);

// COMPARACION DE CADENAS
//alert(2 > "A");
//alert("Hola" > "Holi");
//alert("Zoo" > "Zo");
alert(0 == false);
alert('' == false);
alert(0 === false);
alert(null === undefined);
alert ("01" === 1);
