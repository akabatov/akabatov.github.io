
const tl = gsap.timeline({
    defaults: {duration: 0.35, ease: "Power2.easeOut"}
});

const tl2 = gsap.timeline({
    defaults: {duration: 0.8, ease: "Power2.easeOut"}
});

const tl3 = gsap.timeline({
    defaults: {duration: 0.7, ease: "Power2.easeOut"}
});

const home = document.querySelector('.home');
const messages = document.querySelector('.messages-svg');
const bell = document.querySelector('.notification-svg');

const description_title = document.querySelector('.about-me-title');
const image = document.querySelector('.img-container');
const circles = document.querySelectorAll('.circle');
const arrow = document.querySelector('.showcase-arrow');



//About me page on load animations
window.onload = function() {
    tl2.to('.about-me', {background: "linear-gradient(90deg, #3f7df0, #80a6ea)"}, "start");
    tl2.fromTo(arrow, {y: -200, opacity: 0}, {y: 0, opacity: 1}, "start");
    tl2.fromTo(description_title, {y: -200, opacity: 0}, {y: 0, opacity: 1}, "start");
    tl2.fromTo(circles, {y: 200, opacity: 0}, {y: 0, opacity: 1});
    tl2.fromTo(image, {x: 200, opacity: 0}, {x:0, opacity: 1});
    tl2.fromTo(home, {x: -200, opacity: 0}, {x: 0, opacity: 1}, "<");
    tl2.fromTo(messages, {x: -200, opacity: 0}, {x: 0, opacity: 1}, "<");
    tl2.fromTo(bell, {x: -200, opacity: 0}, {x: 0, opacity: 1}, "<");
    bounce();
}

//Infinite svg bounce 
function bounce(){
    tl3.fromTo('.home-svg', { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 100000 });
    tl3.fromTo(messages, { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 100000 },"<");
    tl3.fromTo(bell, { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 100000 },"<");
}

//Home svg animation
gsap.set('.feather', {scale: 0, transformOrigin: "center"});
home.addEventListener('click', () => {
    tl3.progress(0).clear();
    gsap.fromTo('.home-svg', { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
    gsap.fromTo(
        '.feather', 
        { y: -5, scale: 0 }, 
        { y: 20, scale: 1.5, duration: 0.9, stagger: 0.2 }
    );
    gsap.fromTo('.right-feather', { x: 0 }, { x: 5 });
    gsap.fromTo('.home-title', {x: -100, opacity:0}, {x: 0, opacity:1}, "<");
});

//Email animation
gsap.set('.flap', { transformOrigin: "top" });

messages.addEventListener('click', () => {
    tl.fromTo('.messages-svg', { scale: 1 }, { scale: 0.9 });
    tl.fromTo('.flap', { scale: 1}, { scale: -1 }, "<50%");
    tl.fromTo('.messages-title', {x: -100, opacity: 0}, {x: 0, opacity: 1});
    tl.fromTo('.messages-svg', { scale: 0.9 }, { scale: 1 }, "<50%");
    tl.fromTo('.note', { y: 0, opacity: 1 }, { y: -40, opacity: 0, duration: 1 });
    tl.to('.flap', { scale: 1}, "<50%");
});

//Notifications bell animation
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom"});
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });

bell.addEventListener('click', () => {
    gsap.fromTo(
        '.bell', 
        { rotation: -5 }, 
        { rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)" }
    );
    gsap.fromTo(
        '.ringer', 
        { rotation: -3, x: 0.5 }, 
        { rotation: 0, x: 0, duration: 1, ease: "elastic.out(6, 0.2)" }
    );
    gsap.fromTo('.notifications-title', {x: -100, opacity: 0}, {x: 0, opacity: 1});
    gsap.fromTo('.wave', 
    { opacity: 1, scale: 0 }, 
    { opacity: 0, scale: 1, repeat: 1, duration: 1 });
});


