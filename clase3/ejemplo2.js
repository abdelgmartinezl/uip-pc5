"use strict";

let edad = prompt('Edad?', 100);
alert(`Tienes ${edad}`);
let esJefe = confirm("Eres el jefe?");

if (edad > 18) {
    alert("Eres mayor de edad");
} else if (edad == 18) {
    alert("Apenas con 18");
} else {
    alert("Eres un lapecillo");
}

let resultado = (edad > 12) ? "Puede tener FB" : "Vaya con Peppa";
let estadoAcceso = (esJefe == true) ? true : false;

alert(resultado);

let mensaje = (edad < 3) ? "Vaya con Peppa" :
    (edad < 10) ? "Vaya a jugar fut" :
    (edad < 18) ? "Vaya a estudiar" :
    "Larga a trabajar";
alert(mensaje);

let universidad = prompt("En que universidad estas?", "");
(universidad == 'UIP') ?
    alert("Bien") : alert("Mal");

if ("0") {
    alert("Soy un genio");
}

alert(true || true); 
alert(false || true); 
alert(true || false); 
alert(false || false); 

let hora = 9;
let esFinSemana = true;
if (hora < 7 || hora > 15 || esFinSemana) {
    alert("Abierto");
} else {
    alert ("Cerrado");
}

alert(1 || 0);
alert(true || "wololo");
alert(null || 1);
alert(null || 0 || 1);
alert(undefined || null || 0);

let calificacion = 100;
let portafolio = true;
if (calificacion == 100 && portafolio == true) {
    alert('Algo');
}

alert(!true);
alert(!0);

alert(!!"basura");
alert(!!null);

alert(null || 2 || undefined);

alert(alert(1) || 2 || alert(3) || 4);

let i = 0
while (i < 3) {
    alert(i);
    i++;
}

let x = 3;
while (x) alert(x--);

let i = 3;
do {
    alert(i);
    i--;
} while(i > 0);

for (let i = 0; i < 3; i++) {
    alert(i);
}

let nota = 0;
while (true) {
    let valor = +prompt("Numero: ", '');
    if (!valor) break;
    nota += valor;
}
alert(`Nota = ` + nota);

wololo: for (let i = 0; i <3; i++) { 
    for (let x = 0; x < 3; x++) {
        let valor = prompt(`Valor de ${i} y ${x}: `, '');
        if (!valor) break wololo;
    }
}
alert('Me fui');