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

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
    toggleActions: "restart none none none"
});
const tl = gsap.timeline({ defaults: { ease: "power4.easeInOut" } });
const tlCol = gsap.timeline({scrollTrigger: ".colour-a11y", defaults: { ease: "power4.easeInOut" } });
tl.to(".tr-main", { y: "0%", opacity:"100%", duration: 1, stagger: 0.2 });
tlCol.to(".tr-opac", { opacity:"100%", duration: 0.8, stagger: 0.4 });
// tl.to(".tr-opac", { ScrollTrigger: ".colour-a11y",opacity:"100%", duration: 1, stagger: 0.4 });


clickCounter = 0;
function npClick(){
    clickCounter++
    document.getElementById("click-counter").innerHTML = clickCounter;
}

// bootstrap tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function showTooltip(elem){
    $(elem).tooltip('toggle');
}
