// 
// element.classList.toggle("newClass");
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

function session() {
    if (document.cookie.indexOf("visited") >= 0) {
        $('.b1').remove();
    } else {
        document.cookie = "visited";
    }
}
session()