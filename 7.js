window.onload=function(){

/*
Creamos el mensaje para mostrar cuando hagamos focus en nombre
*/
var ayudaNombre="Introduce el nombre completo";

/*
Capturamos el input nombre y le asociamos dos eventos,
añadirle un mensaje de ayuda en onfocus y quitarlo en on blur
*/
var campoNombre=document.querySelector("#nombre");


campoNombre.addEventListener("focus",event => {
    let sNombre=document.querySelector("#sNombre");
    sNombre.textContent=ayudaNombre;
});

campoNombre.addEventListener("blur",event => {
    let sNombre=document.querySelector("#sNombre");
    sNombre.textContent="";
});


/*
Creamos el mensaje para mostrar cuando hagamos focus en correo
*/

var ayudaCorreo="Introduce el correo de tu universidad";

/*
Capturamos el input correo y le asociamos dos eventos,
añadirle un mensaje de ayuda en onfocus y quitarlo en on blur
*/

var campoCorreo=document.querySelector("#correo");

campoCorreo.addEventListener("focus",event => {
    let sCorreo=document.querySelector("#sCorreo");
    sCorreo.textContent=ayudaCorreo;
});

campoCorreo.addEventListener("blur",event => {
    let sCorreo=document.querySelector("#sCorreo");
    sCorreo.textContent="";
});

}