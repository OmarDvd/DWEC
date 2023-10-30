window.onload=function(){

// Cojemos la imagen
    var imagen=document.querySelector("#imagen");
    
    imagen.addEventListener("dragstart", event=>{
        event.dataTransfer.setData("text", event.target.id);
    });

// Cogemos la zona que será donde dejemos nuestra imagen
    var divDropZone=document.querySelector("#zonaTarget");

    // Asignamos a nuestra zona el evento dragover, ponemos el marco rojo para saber que está sucediendo
    // También hemos prevenido el comportamiento por defecto del navegador para que nos deje dragear sin problemas
    divDropZone.addEventListener("dragover",event =>{
        event.preventDefault();
        document.querySelector("#zonaTarget").style.borderColor="red";
    });

    // Evitamos en el drop de nuevo el comportamiento por defecto del navegador.
    divDropZone.addEventListener("drop",event =>{
        event.preventDefault();
        // Guardamos en data el id valor de la clave texto que hemos guardado en 'event.dataTransfer.setData("text", event.target.id);' previamente
        
        var data = event.dataTransfer.getData("text");
        var droppedElement = document.getElementById(data);

        /*Como hemos puesto posicion relativa al rectangulo, al tener el elemento posicion absoluta, podriamos calcular con el clienX e Y donde dropear la imagen*/
        var rectangulo = event.target.getBoundingClientRect();
      
        // Calculamos la posición relativa al área de destino
        var x = event.clientX - rectangulo.left;
        var y = event.clientY - rectangulo.top;
      
        // Establecemos la posición de la imagen en el área de destino
        droppedElement.style.position = 'absolute';
        droppedElement.style.left = x + 'px';
        droppedElement.style.top = y + 'px';
      
      // Añadimos la imagen a la zona y ponemos el marco verde para saber que todo ha ido bien y que estamos en este evento
        event.target.appendChild(document.getElementById(data));
        document.querySelector("#zonaTarget").style.borderColor="green";
    });


}