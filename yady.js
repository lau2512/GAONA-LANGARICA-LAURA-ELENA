let galeria2 = document.getElementById("paginas2");
let anteriorBTN2 = document.getElementById("anteriorBTN2"); // Asegúrate que el ID coincida
let siguienteBTN2 = document.getElementById("siguienteBTN2");
let ventana2 = document.getElementById("ventana2");

let numero2s = [
   "./imagenes/yady/yady1.jpg",
   "./imagenes/yady/yady2.jpg",
   "./imagenes/yady/yady3.jpg",
];

let i2 = 0;

function siguientePagina2() {
    anteriorBTN2.disabled = false;
    i2++; // Usar i2
    galeria2.src = numero2s[i2]; // Usar numero2s
    if (i2 == numero2s.length - 1) {
        siguienteBTN2.disabled = true;
    }
}

function anteriorPagina2() {
    siguienteBTN2.disabled = false;
    i2--; // Usar i2
    galeria2.src = numero2s[i2]; // Usar numero2s
    if (i2 == 0) {
        anteriorBTN2.disabled = true;
        siguienteBTN2.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir2(){
    ventana2.open = true;
}
function cerrar2(){
    ventana2.open = false;
}