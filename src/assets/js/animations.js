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


