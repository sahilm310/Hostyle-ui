// ------------------------------------------
// #region Gsap
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
    toggleActions: "restart none none none"
});
const tl = gsap.timeline({ defaults: { ease: "power4.easeInOut" } });
const tlCol = gsap.timeline({scrollTrigger: ".tr-opac-trigger", defaults: { ease: "power4.easeInOut" } });
tl.to(".tr-main", { y: "0%", opacity:"100%", duration: 1, stagger: 0.2 });
tlCol.to(".tr-opac", { opacity:"100%", duration: 0.5, stagger: 0.3 });
//#endregion

// ------------------------------------------
// #region Make ENTER key press a click action on active elements 
// retrieved from https://stackoverflow.com/a/62142145
// Code posted by Chris Bodenmiller - Stack Overflow
function handleEnter(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        document.activeElement.click();
    }
}
// last accessed: 21 May 2021 4pm
// #endregion

// ------------------------------------------
// #region toggling class names
// toggle input element's(elem) class list with input (className) 
function toggleClass(elem,className) {
    elem.classList.toggle(className);
}
function toggleClassM(elem,className) {
    let toggle = document.getElementById(elem);
    toggle.classList.toggle(className);
}
// class list toggle specific for nav menu
function toggleNav(id) {
    let show = document.getElementById(id);
    show.classList.toggle("nav-show");
    let hamburger = document.getElementById("icon");
    hamburger.classList.toggle("hb-close");
}
// #endregion

// ------------------------------------------
// #region clickability page click counter
// displaying on DOM
clickCounter = 0;
function npClick(){
    clickCounter++
    document.getElementById("click-counter").innerHTML = clickCounter;
}
// #endregion

// ------------------------------------------
// #region enabling bootstrap tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
function showTooltip(elem){
    $(elem).tooltip('toggle');
}
// #endregion

// ------------------------------------------
// #region could potentially use or not use
// cookies
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
// #endregion