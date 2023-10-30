document.addEventListener("mousemove", function(event) {
    var x = event.clientX; 
    var y = event.clientY; 

    var posicionRaton = document.querySelector("#posicionRaton");
    posicionRaton.textContent = "X = " + x + ", Y = " + y;
});
