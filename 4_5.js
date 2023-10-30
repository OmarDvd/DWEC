window.onload=function(){
    

    /*
    Nos creamos una variable global boleana que 
    nos indica si la letra "b" se está pulsando, true,
    o no, false
    */
    var bPressed=false;

    document.addEventListener("keydown",event => {
        if (event.key === "b") {
            bPressed = true;
        }
    });
    document.addEventListener("keyup",event => {
        if (event.key === "b") {
            bPressed = false;
        }
    });

    
    /*Guardamos nuestra tabla en el objeto tabla para asignarle posterirmente
    el evento onmouseover y decidir de qué color pintar la celda sobre la que se hace mouseover*/
    let tabla=document.querySelector("#tabla");

    /*Guardamos nuestro boton para asignarle el evento clic para resetear las casillas a blanco*/
    var botonReset=document.querySelector("#todoBlanco");
    botonReset.addEventListener("click",(event) => {
       let arrayCasillas= document.querySelectorAll(".resetCasilla");
       arrayCasillas.forEach(element => element.style.backgroundColor="white");
    });


    tabla.addEventListener("mouseover", (event) => {
        if(event.shiftKey){
            if(event.target.tagName==="TD"){
                event.target.style.backgroundColor="blue";
            }
        }
        if(event.ctrlKey){
            if(event.target.tagName==="TD"){
                event.target.style.backgroundColor="red";
            }
        }
        if(bPressed){
            if(event.target.tagName==="TD"){
                event.target.style.backgroundColor="white";
            }
        }
        
    });

 /*
    Creamos nuestra tabla y le asignamos como argumentos el número de filas,
    el número de columnas, el ancho y por última el alto de cada celda.
    También le asignamos un border y una clase que luego usaremos para el boton reset 
    */
 
    function creaTabla(filas,columnas,ancho,alto){
    
    
        for(let i=0;i<filas;i++){
            var fila=document.createElement("tr");
            for(let k=0;k<columnas;k++){
                let columna=document.createElement("td");
                columna.classList.add("resetCasilla");
                columna.style.width=ancho;
                columna.style.height=alto;
                columna.style.border="1px solid black";

                fila.appendChild(columna);
            }
            let tabla=document.querySelector("#tabla");
            tabla.style.width="800px";
            tabla.style.height="700px";
            tabla.appendChild(fila);
        }
    }
    
    /*
    Test de llamada a la función
    */
    creaTabla(7,7,70,70);
}

