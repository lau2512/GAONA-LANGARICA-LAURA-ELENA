let galeria12= document.getElementById("paginas12");
let anteriorBTN12 = document.getElementById("anteriorBTN12"); // Asegúrate que el ID coincida
let siguienteBTN12 = document.getElementById("siguienteBTN12");
let ventana12 = document.getElementById("ventana12");

let numero12s = [
"./imagenes/Liam/liam1.jpg",
"./imagenes/Liam/liam2.jpg",
"./imagenes/Liam/liam3.jpg",
"./imagenes/Liam/liam4.jpg",
];

let i12 = 0;

function siguientePagina12() {
    anteriorBTN12.disabled = false;
    i12++; 
    galeria12.src = numero12s[i12]; 
    if (i12 == numero12s.length - 1) {
        siguienteBTN12.disabled = true;
    }
}

function anteriorPagina12() {
    siguienteBTN12.disabled = false;
    i12--; 
    galeria12.src = numero12s[i12]; 
    if (i12 == 0) {
        anteriorBTN12.disabled = true;
        siguienteBTN12.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir12(){
    ventana12.open = true;
}
function cerrar12(){
    ventana12.open = false;
}