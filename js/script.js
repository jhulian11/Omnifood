const yearEl = document.querySelector('.year');

yearEl.textContent = new Date().getFullYear();

const headerEl = document.querySelector('.header');

const btnMobileNav =  headerEl.querySelector('.btn-mobile-nav');

btnMobileNav.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});