const omnifood = () => {
    const headerEl = document.querySelector('.header');

    const yearUpdate = () =>{
        const yearEl = document.querySelector('.year');
    
        yearEl.textContent = new Date().getFullYear();
    };
    
    const  headerMobileAction = () => {
    
        const btnMobileNav =  headerEl.querySelector('.btn-mobile-nav');
    
        btnMobileNav.addEventListener('click', () => {
            headerEl.classList.toggle('nav-open');
        });
    };

    const smoothScrolling = () => {
        const allLinks = document.querySelectorAll('a:link');

        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const href = link.getAttribute('href');

                // Scroll back to top
                if (href === "#")
                window.scrollTo({
                top: 0,
                behavior: "smooth",
                });

                // Scroll to other links
                if (href !== "#" && href.startsWith("#")) {
                const sectionEl = document.querySelector(href);
                sectionEl.scrollIntoView({ behavior: "smooth" });
                }

                // Close mobile naviagtion
                if (link.classList.contains("main-nav-link"))
                    headerEl.classList.toggle("nav-open");

            });
        });
    };
    
    const init = () => {
        yearUpdate();
        headerMobileAction();
        smoothScrolling();
    };

    init();
};

omnifood();




