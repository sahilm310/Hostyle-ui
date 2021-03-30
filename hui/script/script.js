// 
// element.classList.toggle("newClass");
function toggle(id){
    var np = document.getElementById(id);
    np.classList.toggle("inactive");
}
const tl = gsap.timeline({ defaults: { ease: "power2.easeOut" } });

tl.to(".tr-main", { y: "0%", duration: 1, stagger: 0.4 });