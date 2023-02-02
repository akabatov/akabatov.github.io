const tl = gsap.timeline({
    defaults: {duration: 0.7, ease: "Power2.easeOut"}
});

const arrow = document.querySelectorAll(".showcase-arrow");
const arrow2 = document.querySelectorAll(".showcase-arrow-left");
const description_title = document.querySelector('.about-me-title');

window.onload = function() {
    tl.to('.about-me', {background: "linear-gradient(260deg, #b65d62, #754d4f)"}, "start");
    tl.fromTo(arrow, {y: -200, opacity: 0}, {y: 0, opacity: 1}, "start");
    tl.fromTo(arrow2, {y: -200, opacity: 0}, {y: 0, opacity: 1}, "start");
    tl.fromTo(description_title, {y: -200, opacity: 0}, {y: 0, opacity: 1}, "start");
    tl.fromTo('.fl', {x: -200, opacity: 0}, {x: 0, opacity: 1});
    tl.fromTo('.nl', {x: 200, opacity: 0}, {x: 0, opacity: 1}, "<");
}