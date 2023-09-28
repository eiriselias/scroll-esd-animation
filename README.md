# Scroll ESD animation

Este repositorio sera creado para guardar animaciones de scroll que valla creando y poder utilizarlas en otras plantillas.

al iniciar un proyecto de angular primero creare una carpeta dentro de la carpeta assets y la llamare js, donde creare el archivo animations.js

tambien creare un servicio para poder agregar el archivo js a mi proyecto de angular al cual llamare animation

y en el archivo principal styles.css es donde guardare las diferentes animaciones para utilizarlas de manera global en los componentes.

ingresamos al servicio y agregamos la siguiente funcion

    public loadScript(){
        console.log("loading to scripts");
        let node = document.createElement("script");
        node.src = "assets/js/animations.js";
        node.type = "text/javascripts";
        node.async = true;
        document.getElementsByTagName('head')[0].appendChild(node);
    }

este servicio lo inyectaremos en el app.component.ts y en su constructor llamamos la funcionn loadScript

    constructor(private animationServe: AnimationService){
        this.animationServe.loadScript();
    }

en el archivo animations.js agregamos el siguiente  script

    const animate =  document.querySelectorAll(".animation");

    function callback(entries){
        entries.forEach(entry => {
            const animation = entry.target;
            animation.classList.toggle('unset', entry.isIntersecting);
        });
    }

    const options = {
        root:null,
        rootMargin:"0px",
        threshold:0.25,
    }

    const observer = new IntersectionObserver(callback, options);

