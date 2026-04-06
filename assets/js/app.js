document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    if (header && hero) {
        const heroHeight = hero.offsetHeight;

        window.addEventListener('scroll', () => {
            if (window.scrollY > heroHeight) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        });
    }
});



const slides = document.querySelectorAll('.reviews-item');
const prevBtn = document.querySelector('.slider-arrows-prev');
const nextBtn = document.querySelector('.slider-arrows-next');
let current = 0;
let timer;

function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    clearInterval(timer);
    goTo(current - 1);
    timer = setInterval(() => goTo(current + 1), 5000);
});

nextBtn.addEventListener('click', () => {
    clearInterval(timer);
    goTo(current + 1);
    timer = setInterval(() => goTo(current + 1), 5000);
});

timer = setInterval(() => goTo(current + 1), 5000);



const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
 
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
});
 