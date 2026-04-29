let galeria7= document.getElementById("paginas7");
let anteriorBTN7 = document.getElementById("anteriorBTN7"); // Asegúrate que el ID coincida
let siguienteBTN7 = document.getElementById("siguienteBTN7");
let ventana7 = document.getElementById("ventana7");

let numero7s = [
"./imagenes/joss/joss1.jpg",
"./imagenes/joss/joss2.jpg",
"./imagenes/joss/joss3.jpg",
];

let i7 = 0;

function siguientePagina7() {
    anteriorBTN7.disabled = false;
    i7++; 
    galeria7.src = numero7s[i7]; 
    if (i7 == numero7s.length - 1) {
        siguienteBTN7.disabled = true;
    }
}

function anteriorPagina7() {
    siguienteBTN7.disabled = false;
    i7--; 
    galeria7.src = numero7s[i7]; 
    if (i7 == 0) {
        anteriorBTN7.disabled = true;
        siguienteBTN7.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir7(){
    ventana7.open = true;
}
function cerrar7(){
    ventana7.open = false;
}