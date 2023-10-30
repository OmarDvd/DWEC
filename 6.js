window.onload=function(){

    // Capturamos todas las columnas en un array de columnas
    var aTD=document.querySelectorAll("TD");
    aTD.forEach(element => 
    element.addEventListener("mouseover",event =>{
        // Asignamos a cada elemento del array el evento mouseover y que nos ponga el fondo del color del texto que contiene
        element.style.backgroundColor=element.textContent;
    })
    );

}