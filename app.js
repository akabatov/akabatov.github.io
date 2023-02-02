const tl = gsap.timeline({
    defaults: {duration: 0.75, ease: "power3.out"},
});


tl.fromTo(
    ".hero-img", 
    {scale: 0, borderRadius: '0rem'}, 
    {
        scale: 1,
        borderRadius: '2rem',
        delay: 0.35,
        duration: 2.5, 
        ease: 'elastic.out(1.5, 1)',
    }
);

tl.fromTo(
    ".blur",
    {scale:0},
    {
        scale: 1,
        delay:0.35, 
        duration: 2.5, 
        ease: 'elastic.out(0.7, 1)',
    }
);

tl.fromTo('.cta1', {x: '100%', opacity: 0}, {x: 0, opacity: 1}, "<20%");
tl.fromTo('.cta3', {x: '-100%', opacity: 0}, {x: 0, opacity: 1}, "<20%");
tl.fromTo('.cta2', {y: '100%', opacity: 0}, {y: 0, opacity: 1}, "<20%");

tl.fromTo('.cta4', {x: '100%', opacity: 0}, {x: 0, opacity: 1}, "<20%");
tl.fromTo('.cta6', {x: '-100%', opacity: 0}, {x: 0, opacity: 1}, "<20%");
tl.fromTo('.cta5', {y: '100%', opacity: 0}, {y: 0, opacity: 1}, "<20%");

tl.fromTo('.cta-btn', {y: 20, opacity: 0}, {y: 0, opacity: 1});

//Split text alternative
const logo_1 = document.querySelector('.logo-1');
const letters = logo_1.textContent.split("");
logo_1.textContent = "";

letters.forEach(letter =>{
    logo_1.innerHTML += '<span class="letter">' + letter + '</span>';
});
gsap.set('.letter', {display: "inline-block"});
gsap.fromTo('.letter', {y: "100%"}, {y: 0, delay: 2, stagger: 0.05, ease: 'back.out(3)'});


const logo_2 = document.querySelector('.logo-2');
const letters_2 = logo_2.textContent.split("");
logo_2.textContent = "";

letters_2.forEach(letter =>{
    logo_2.innerHTML += '<span class="letter">' + letter + '</span>';
});
gsap.set('.letter', {display: "inline-block"});
gsap.fromTo('.letter', {y: "100%"}, {y: 0, delay: 2, stagger: 0.05, ease: 'back.out(3)'});