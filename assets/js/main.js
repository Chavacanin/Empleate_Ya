//creamos variables para obtener el dato (DOM)
const buscador = document.getElementById('search');
const botoncito = document.querySelector('.bot');
const sesion = document.querySelector('.botones');
const titulo = document.getElementById('titulo');
let estadoboton = false;
let estadoTitulo = false;

botoncito.addEventListener('click', ()=>{
    if (buscador.value.trim() === "") {
        alert('Ingrese una busqueda valida.')

        
    } else {
        alert(`Buscando... ${buscador.value}`);
        
    }
})


sesion.addEventListener('click', ()=>{
    if (estadoboton==false) {
        estaditos();
        alert('Direccionando..')
        
    } else {
        alert('nop');
        
        
    }
})

function estaditos(){
    estadoboton = true;

}

if (titulo) {
    titulo.addEventListener('click', ()=>{
        estadoTitulo = ! estadoTitulo
        if (estadoTitulo) {
            titulo.innerHTML="Y te conviertan en un gran <br> profesional" ;
            titulo.style.transition="0.9s ease";
            titulo.style.color="darkgoldenrod";
            
        } else {
            titulo.innerHTML="Encuentra el trabajo <br> que impulsen tus sueños";
            titulo.style="";
            titulo.style.transition="0.9s ease";

            
        }
      
    })
    
}