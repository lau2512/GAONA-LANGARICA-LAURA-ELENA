let galeria9= document.getElementById("paginas9");
let anteriorBTN9 = document.getElementById("anteriorBTN9"); // Asegúrate que el ID coincida
let siguienteBTN9 = document.getElementById("siguienteBTN9");
let ventana9 = document.getElementById("ventana9");

let numero9s = [
"./imagenes/Carlos/carlos1.jpg",
"./imagenes/Carlos/carlos2.jpg",
"./imagenes/Carlos/carlos3.jpg",
];

let i9 = 0;

function siguientePagina9() {
    anteriorBTN9.disabled = false;
    i9++; 
    galeria9.src = numero9s[i9]; 
    if (i9 == numero9s.length - 1) {
        siguienteBTN9.disabled = true;
    }
}

function anteriorPagina9() {
    siguienteBTN9.disabled = false;
    i9--; 
    galeria9.src = numero9s[i9]; 
    if (i9 == 0) {
        anteriorBTN9.disabled = true;
        siguienteBTN9.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir9(){
    ventana9.open = true;
}
function cerrar9(){
    ventana9.open = false;
}