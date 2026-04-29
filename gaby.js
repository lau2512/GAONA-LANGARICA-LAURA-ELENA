let galeria4 = document.getElementById("paginas4");
let anteriorBTN4 = document.getElementById("anteriorBTN4"); // Asegúrate que el ID coincida
let siguienteBTN4 = document.getElementById("siguienteBTN4");
let ventana4 = document.getElementById("ventana4");

let numero4s = [
   "./imagenes/Gaby/Gaby1.jpg",
   "./imagenes/Gaby/Gaby2.jpg",
   "./imagenes/Gaby/Gaby3.jpg",
   "./imagenes/Gaby/Gaby4.jpg",
   "./imagenes/Gaby/Gaby5.jpg",
   "./imagenes/Gaby/Gaby6.jpg",
];

let i4 = 0;

function siguientePagina4() {
    anteriorBTN4.disabled = false;
    i4++; 
    galeria4.src = numero4s[i4]; 
    if (i4 == numero4s.length - 1) {
        siguienteBTN4.disabled = true;
    }
}

function anteriorPagina4() {
    siguienteBTN4.disabled = false;
    i4--; 
    galeria4.src = numero4s[i4]; 
    if (i4 == 0) {
        anteriorBTN4.disabled = true;
        siguienteBTN4.disabled = false;
    }
}

/* Abrir y cerrar ventana super puesta */
function abrir4(){
    ventana4.open = true;
}
function cerrar4(){
    ventana4.open = false;
}