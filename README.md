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
        node.type = "text/javascript";
        node.async = true;
        document.getElementsByTagName('head')[0].appendChild(node);
    }

este servicio lo inyectaremos en el app.component.ts y en su constructor llamamos la funcionn loadScript

    constructor(private animationServe: AnimationService){
        this.animationServe.loadScript();
    }

en el archivo animations.js agregamos el siguiente  script

    const animates =  document.querySelectorAll(".animation");


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

    animates.forEach(animate=>{observer.observe(animate)});

aqui dejo un ejemplo de las animaciones las cuales en este caso agregaremos en el css principal

    [animation-right="move"]{
        opacity: 0;
        transform: translate(100%);
        transition: 2s ease-in;

        --opacity:1;
        --transform:translate(0) ;
    }

    .unset{
        opacity: var(--opacity);
        transform: var(--transform);
    }

ahora un ejemplo de como podemos utilizar los estilos en el html

    <img src="https://i.imgur.com/dWAcnZP.jpg" alt="selfie" class="animation" animation-left="move" >
        <div class="text">
            <h4 class="animation" animation-left="move">Hola!</h4>
            <h1 class="animation" animation-right="move">Soy Elias Salazar</h1>
            <h4 class="animation" animation-left="move">Desarrollador Front-End</h4>
        </div>