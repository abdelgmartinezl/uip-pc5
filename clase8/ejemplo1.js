"use strict";

let num = +prompt("Introduzca un numero entero positivo:", 20);
let dif, res;

function fibonacci(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Debe ser un numero positivo.");
    }
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
let inicio = Date.now();
try {
    res = fibonacci(num);
} catch (err) {
    res = 0;
} finally {
    dif = Date.now() - inicio;
}

alert(res || "Ha ocurrido un error");
alert( `Ejecucion tomo ${dif}ms` );
