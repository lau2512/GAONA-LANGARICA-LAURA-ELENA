let galeria10= document.getElementById("paginas10");
let anteriorBTN10 = document.getElementById("anteriorBTN10"); // Asegúrate que el ID coincida
let siguienteBTN10 = document.getElementById("siguienteBTN10");
let ventana10 = document.getElementById("ventana10");

let numero10s = [
"./imagenes/eli/ELI1.jpg",
"./imagenes/eli/ELI2.jpg",
"./imagenes/eli/ELI3.jpg",
"./imagenes/eli/ELI4.jpg",
"./imagenes/eli/ELI5.jpg",
];

let i10 = 0;

function siguientePagina10() {
    anteriorBTN10.disabled = false;
    i10++; 
    galeria10.src = numero10s[i10]; 
    if (i10 == numero10s.length - 1) {
        siguienteBTN10.disabled = true;
    }
}

function anteriorPagina10() {
    siguienteBTN10.disabled = false;
    i10--; 
    galeria10.src = numero10s[i10]; 
    if (i10 == 0) {
        anteriorBTN10.disabled = true;
        siguienteBTN10.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir10(){
    ventana10.open = true;
}
function cerrar10(){
    ventana10.open = false;
}