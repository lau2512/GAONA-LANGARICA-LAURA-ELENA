let galeria11= document.getElementById("paginas11");
let anteriorBTN11 = document.getElementById("anteriorBTN11"); // Asegúrate que el ID coincida
let siguienteBTN11 = document.getElementById("siguienteBTN11");
let ventana11 = document.getElementById("ventana11");

let numero11s = [
"./imagenes/Arai/Arai1.jpg",
"./imagenes/Arai/Arai2.jpg",
"./imagenes/Arai/Arai3.jpg",
"./imagenes/Arai/Arai4.jpg",
];

let i11 = 0;

function siguientePagina11() {
    anteriorBTN11.disabled = false;
    i11++; 
    galeria11.src = numero11s[i11]; 
    if (i11 == numero11s.length - 1) {
        siguienteBTN11.disabled = true;
    }
}

function anteriorPagina11() {
    siguienteBTN11.disabled = false;
    i11--; 
    galeria11.src = numero11s[i11]; 
    if (i11 == 0) {
        anteriorBTN11.disabled = true;
        siguienteBTN11.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir11(){
    ventana11.open = true;
}
function cerrar11(){
    ventana11.open = false;
}