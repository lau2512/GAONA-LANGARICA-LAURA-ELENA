//LAU - HORIZONTE INALCANZABLE
let galeria = document.getElementById ("paginas");
let anteriorBTN = document.getElementById ("anteriorBTN");
let siguienteBTN = document.getElementById ("siguienteBTN");
let ventana = document.getElementById ("ventana");

let numeros = [
   "./imagenes/Lau/Laucomic1.jpg",
    "./imagenes/Lau/Laucomic2.jpg",
    "./imagenes/Lau/Laucomic3.jpg",
    "./imagenes/Lau/Laucomic4.jpg",
];

let i = 0;

function siguientePagina(){
    anteriorBTN.disabled = false;
    i++;
    galeria.src = numeros [i];
    if (i == numeros.length-1){
        siguienteBTN.disabled = true;
    }
}

function anteriorPagina(){
    siguienteBTN.disabled = false;
    i --;
    galeria.src = numeros [i];
    if (i ==0) {
        anteriorBTN.disabled=true;
        siguienteBTN.disabled=false;

    }

}

/* Abrir y cerrar ventana super puesta */
function abrir(){
    ventana.open = true;
}
function cerrar(){
    ventana.open = false;
}