"use strict";

// let profesion = prompt("Cual es tu profesion?", "carpintero");

// let usuario = {
//     nombre: "Juan",
//     edad: 37,
//     "password seguro": "wololo",
//     [profesion]: true
// };

// alert( profesion );
// alert( usuario.carpintero )

// alert( usuario.nombre );
// if ( usuario.edad > 18 ) {
//     alert( "Mayor de edad" );
// }
// alert( usuario["password seguro"] );

// function crearUsuario(nombre, edad) {
//     return {
//         nombre: nombre,
//         edad: edad
//     };
// }
// let usuario = crearUsuario("Petra", 175);
// alert ( usuario.nombre );

// let persona = {};
// alert( persona.noSuchProperty === undefined );

// let ciudadano = { nombre: "Petra", edad: 175 };
// alert( "edad" in ciudadano );
// alert( "basura" in ciudadano );

// let perro = {
//     nombre: "Rintintin",
//     peso: 75.63,
//     esFavorito: true
// };

// for (let p in perro) {
//     alert( p );
//     alert( perro[p] );
// }

// let codigos = {
//     "Estados Unidos": "1",
//     "Aruba": "297",
//     "Haiti": "509",
//     "Cuba": "53",
//     "Panama": "507",
//     "Venezuela": "58",
//     "Senegal": "221",
//     "Portugal": "351"
// }

// for(let codigo in codigos) {
//     alert(codigo)
// }

// let x = prompt("Pais a llamar", "Panama");
// if (x in codigos) {
//     let num = prompt( "Inserte numero a llamar: " + codigos[x] );
//     alert("Llamando a +" + codigos[x] + num);
// }

// let mensaje = "Xopa";
// let frase = mensaje;
// alert(frase);
// mensaje = "Chillin";
// alert(frase);

// let usuario = { nombre: "Matusalem" };
// let inmortal = usuario;
// inmortal.nombre = "Susana";
// alert(usuario.nombre)

// let a = {};
// let b = a;
// alert( a == b );
// alert( a === b );

// let c = {};
// let d = {};
// alert( c == d );
// alert( c === d );

// const persona = {
//     nombre: "Petra"
// };
// persona.edad = 27;
// alert( persona.edad );
// persona.edad = 28;
// alert( persona.edad );

// persona = {
//     nombre: "Susana",
//     edad: 75
// };
// alert( persona.edad );

let tropa = {
    persona1: {
        nombre: "Susana",
        edad: 197
    },
    persona2: {
        nombre: "Petra",
        edad: 731
    },
    persona3: {
        nombre: "Xenobia",
        edad: 995
    }
};

function sumarTropa(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

let recluta = sumarTropa("Calixtra", 150);
tropa["persona"+String(Object.keys(tropa).length+1)] = recluta;

for (let persona in tropa) {
    alert( "Que xopa, " + tropa[persona].nombre );
}
alert(Object.keys(tropa));