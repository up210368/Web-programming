// El DOM es todo el contenido html. 
// Obtiene todas las variables que definimos usando document.
let ContainerClicks = document.getElementById('container-clicks'); // obtener por id
ContainerClicks.style.color = "#ff0000";

let btnIncre = document.querySelector('.incre'); // obtener por clase (primer coincidencia)
let btnDecre = document.querySelector('.decre');
let btnReset = document.querySelector('.reset');

let count = 0;

document.addEventListener('DOMContentLoaded', () => { // cuando termina de cargar el DOM ejecuta sus acciones
    ContainerClicks.innerText = count;
    btnIncre.addEventListener("click", function(){
        count++;
        ContainerClicks.innerText = count;
    });
    
    btnDecre.onclick = function(){
        count--;
        ContainerClicks.innerText = count;
    }
    
    btnReset.addEventListener("click", function(){
        count = 0;
        ContainerClicks.innerText = count;
    });
});