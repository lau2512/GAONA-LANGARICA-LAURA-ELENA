let galeria5 = document.getElementById("paginas5");
let anteriorBTN5 = document.getElementById("anteriorBTN5"); // Asegúrate que el ID coincida
let siguienteBTN5 = document.getElementById("siguienteBTN5");
let ventana5 = document.getElementById("ventana5");

let numero5s = [
   "./imagenes/emilio/emilio1.jpg",
   "./imagenes/emilio/emilio2.jpg",
   "./imagenes/emilio/emilio3.jpg",
   "./imagenes/emilio/emilio4.jpg",
];

let i5 = 0;

function siguientePagina5() {
    anteriorBTN5.disabled = false;
    i5++; 
    galeria5.src = numero5s[i5]; 
    if (i5 == numero5s.length - 1) {
        siguienteBTN5.disabled = true;
    }
}

function anteriorPagina5() {
    siguienteBTN5.disabled = false;
    i5--; 
    galeria5.src = numero5s[i5]; 
    if (i5 == 0) {
        anteriorBTN5.disabled = true;
        siguienteBTN5.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir5(){
    ventana5.open = true;
}
function cerrar5(){
    ventana5.open = false;
}