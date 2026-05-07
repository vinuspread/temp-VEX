document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const updateNav = () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', updateNav, { passive: true });
        updateNav();
    }

    // 2. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // 3. Newsletter form (demo)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const btn = newsletterForm.querySelector('button');
            if (input.value.trim()) {
                btn.textContent = 'Subscribed ✓';
                input.value = '';
                setTimeout(() => { btn.textContent = 'Subscribe'; }, 3000);
            }
        });
    }

});
