const tl = gsap.timeline({
    defaults: {duration: 0.75, ease: "power3.out"},
});

const arrow = document.querySelectorAll(".showcase-arrow");
const arrow2 = document.querySelectorAll(".showcase-arrow-left");
const description_title = document.querySelector('.about-me-music');
const song1 = document.getElementById('song1');
const song2 = document.getElementById('song2');

window.onload = function() {
    tl.to('.about-me', {background: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"});
    tl.fromTo(arrow, {y: -200, opacity: 0}, {y: 0, opacity: 1}, "start");
    tl.fromTo(arrow2, {y: -200, opacity: 0}, {y: 0, opacity: 1}, "start");
    tl.fromTo(description_title, {y: -200, opacity: 0}, {y: 0, opacity: 1}, "start");
    tl.fromTo(song1, {x: -200, opacity: 0}, {x: 0, opacity: 1});
    tl.fromTo(song2, {x: 200, opacity: 0}, {x: 0, opacity: 1}, "<");
}

const play = document.querySelector('.song1');
const play2 = document.querySelector('.song2');

play.addEventListener('click', () => {
    play2.pause();
    play2.currentTime = 0;
});

play2.addEventListener('click', () => {
    play.pause();
    play.currentTime = 0;
});

