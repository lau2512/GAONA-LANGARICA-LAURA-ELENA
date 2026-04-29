let galeria6 = document.getElementById("paginas6");
let anteriorBTN6 = document.getElementById("anteriorBTN6"); // Asegúrate que el ID coincida
let siguienteBTN6 = document.getElementById("siguienteBTN6");
let ventana6 = document.getElementById("ventana6");

let numero6s = [
"./imagenes/georgy/Georgy1.jpg",
"./imagenes/georgy/Georgy2.jpg",
"./imagenes/georgy/Georgy3.jpg",
];

let i6 = 0;

function siguientePagina6() {
    anteriorBTN6.disabled = false;
    i6++; 
    galeria6.src = numero6s[i6]; 
    if (i6 == numero6s.length - 1) {
        siguienteBTN6.disabled = true;
    }
}

function anteriorPagina6() {
    siguienteBTN6.disabled = false;
    i6--; 
    galeria6.src = numero6s[i6]; 
    if (i6 == 0) {
        anteriorBTN6.disabled = true;
        siguienteBTN6.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir6(){
    ventana6.open = true;
}
function cerrar6(){
    ventana6.open = false;
}