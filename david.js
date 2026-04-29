let galeria3 = document.getElementById("paginas3");
let anteriorBTN3 = document.getElementById("anteriorBTN3"); // Asegúrate que el ID coincida
let siguienteBTN3 = document.getElementById("siguienteBTN3");
let ventana3 = document.getElementById("ventana3");

let numero3s = [
   "./imagenes/David/David1.jpg",
   "./imagenes/David/David2.jpg",
   "./imagenes/David/David3.jpg",
   "./imagenes/David/David4.jpg",
   "./imagenes/David/David5.jpg",
   "./imagenes/David/David6.jpg",
   "./imagenes/David/David7.jpg",
   "./imagenes/David/David8.jpg",
];

let i3 = 0;

function siguientePagina3() {
    anteriorBTN3.disabled = false;
    i3++; 
    galeria3.src = numero3s[i3]; 
    if (i3 == numero3s.length - 1) {
        siguienteBTN3.disabled = true;
    }
}

function anteriorPagina3() {
    siguienteBTN3.disabled = false;
    i3--; 
    galeria3.src = numero3s[i3]; 
    if (i3 == 0) {
        anteriorBTN3.disabled = true;
        siguienteBTN3.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir3(){
    ventana3.open = true;
}
function cerrar3(){
    ventana3.open = false;
}