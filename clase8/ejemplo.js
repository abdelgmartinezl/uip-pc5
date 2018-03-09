"use strict";

let json = '{ "edad": 32 }';

try {
    let usuario = JSON.parse(json);
    
    if (!usuario.nombre) {
        throw new SyntaxError("Data incompleta: sin nombre");
    }

    alert( usuario.nombre );
} catch (err) {
    alert("Lo siento mucho, esa data tiene errores");
    alert( err.name );
    alert( err.message );
}