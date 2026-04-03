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