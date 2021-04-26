// cookie
function session() {
    if (document.cookie.indexOf("visited") >= 0) {
        // nav bar hidden by default
        // and displayed here if user has visited site before
    }
    else {
        document.cookie = "visited; Secure";
    }
}
session()


function toggle(id){
    var np = document.getElementById(id);
    np.classList.toggle("inactive");
}

function toggleClass(elem,className) {
    elem.classList.toggle(className);
}

const tl = gsap.timeline({ defaults: { ease: "power2.easeOut" } });

tl.to(".tr-main", { y: "0%", duration: 1, stagger: 0.4 });


clickCounter = 0;
function npClick(){
    clickCounter++
    document.getElementById("click-counter").innerHTML = clickCounter;
}

// bootstrap tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

