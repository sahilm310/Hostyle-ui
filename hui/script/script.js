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