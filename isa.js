let galeria8= document.getElementById("paginas8");
let anteriorBTN8 = document.getElementById("anteriorBTN8"); // Asegúrate que el ID coincida
let siguienteBTN8 = document.getElementById("siguienteBTN8");
let ventana8 = document.getElementById("ventana8");

let numero8s = [
"./imagenes/isa/isa1.jpg",
"./imagenes/isa/isa2.jpg",
"./imagenes/isa/isa3.jpg",
"./imagenes/isa/isa4.jpg",
];

let i8 = 0;

function siguientePagina8() {
    anteriorBTN8.disabled = false;
    i8++; 
    galeria8.src = numero8s[i8]; 
    if (i8 == numero8s.length - 1) {
        siguienteBTN8.disabled = true;
    }
}

function anteriorPagina8() {
    siguienteBTN8.disabled = false;
    i8--; 
    galeria8.src = numero8s[i8]; 
    if (i8 == 0) {
        anteriorBTN8.disabled = true;
        siguienteBTN8.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir8(){
    ventana8.open = true;
}
function cerrar8(){
    ventana8.open = false;
}

