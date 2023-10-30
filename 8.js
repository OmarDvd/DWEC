window.onload = function () {

    /* Capturamos el objeto input nombre y el asiganmos un evento onblur
    para convertir su texto con "&"" en "and" cuando se deje de hacer focus */

    var iNombre = document.querySelector("#nombre");

    iNombre.addEventListener("blur", event => {
        let textoSinFormateo = iNombre.value;
        let aTextoSinFormateo = textoSinFormateo.split('');
        let aTextoConFormateo = aTextoSinFormateo.map(element => {
            if (element === '&') {
                return "and";
            }
            return element;
            
        });
        let textoConFormateo = aTextoConFormateo.join('');
        iNombre.value = textoConFormateo;
    });


    /* Capturamos el objeto input correo y el asiganmos un evento onblur
    para convertir su texto con "&"" en "and" cuando se deje de hacer focus */

    var iCorreo = document.querySelector("#correo");

    iCorreo.addEventListener("blur", event => {
        let textoSinFormateo = iCorreo.value;
        let aTextoSinFormateo = textoSinFormateo.split('');
        let aTextoConFormateo = aTextoSinFormateo.map(element => {
            if (element === '&') {
                return "and";
            }
            return element;
            
        });
        let textoConFormateo = aTextoConFormateo.join('');
        iCorreo.value = textoConFormateo;
    });


}