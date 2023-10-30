var empieza= new Date();
empieza=empieza.getTime();



window.onload=function(){
    
    var parrafo=document.querySelector("#tiempoTranscurrido");

    var termina= new Date();
    termina=termina.getTime();
    var tiempoTranscurrio=termina-empieza;
    parrafo.textContent=`El tiempo transcurrido entre desde
    que empieza ${empieza} y termina ${termina} es ${tiempoTranscurrio}ms`;
}