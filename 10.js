window.onload=function(){

// Misma lógica que anteriormente pero comento lo nuevo



// Ahora, en lugar de asociar directamente un evento a una imagen con un id concreto, 
// se lo asocio a todas las imágenes

    var aImagenes=document.querySelectorAll("img");
    aImagenes.forEach(element=>
        element.addEventListener("dragstart", event=>{
            event.dataTransfer.setData("text", event.target.id);
        }));



    var divDropZone=document.querySelector("#zonaTarget");
    divDropZone.addEventListener("dragover",event =>{
        event.preventDefault();
        document.querySelector("#zonaTarget").style.borderColor="red";
    });


    divDropZone.addEventListener("drop",event =>{
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
      
        var droppedElement = document.getElementById(data);
        var rectangulo = event.target.getBoundingClientRect();
      
        // Calcular la posición relativa al área de destino
        var x = event.clientX - rectangulo.left;
        var y = event.clientY - rectangulo.top;
      
        // Establecer la posición de la imagen en el área de destino
        droppedElement.style.position = 'absolute';
        droppedElement.style.left = x + 'px';
        droppedElement.style.top = y + 'px';
      
      
        event.target.appendChild(document.getElementById(data));
        document.querySelector("#zonaTarget").style.borderColor="green";
    });


}