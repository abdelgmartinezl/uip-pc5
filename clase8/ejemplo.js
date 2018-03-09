"use strict";

let json = '{ "nombre": "Karl" }';

try {
    let usuario = JSON.parse(json);
    
    if (!usuario.nombre) {
        throw new SyntaxError("Data incompleta: sin nombre");
    }

    throw new MediaStreamError("No funciono");

    alert( usuario.nombre );
} catch (err) {
    if (err.name == "SyntaxError") {
        alert("Lo siento mucho, esa data tiene errores");
    } else {
        alert("Es otra cosa");
    }
}