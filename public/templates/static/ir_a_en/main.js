document.addEventListener('DOMContentLoaded', () => {

    // Active nav link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (a.getAttribute('href') === path) a.classList.add('active');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    // Number count-up animation (GSAP)
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const isDecimal = target % 1 !== 0;
        const counter = { val: 0 };
        gsap.to(counter, {
            val: target,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => {
                el.textContent = prefix + (isDecimal ? counter.val.toFixed(1) : Math.floor(counter.val).toLocaleString()) + suffix;
            },
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
    });

    // Scroll reveal animation (GSAP ScrollTrigger)
    gsap.utils.toArray('.reveal').forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => el.classList.add('visible'),
        });
    });

    // IR Alert form
    const alertForm = document.querySelector('.alert-form');
    if (alertForm) {
        alertForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('.alert-input');
            if (input && input.value) {
                const btn = this.querySelector('.alert-submit');
                btn.textContent = 'Subscribed ✓';
                btn.style.background = '#1a8a4a';
                input.value = '';
                input.disabled = true;
                btn.disabled = true;
            }
        });
    }

    // Stock ticker mock update (demo purposes)
    const priceEl = document.querySelector('.nav-stock-price');
    if (priceEl) {
        setInterval(() => {
            const base = 48200;
            const delta = (Math.random() - 0.48) * 80;
            const price = (base + delta).toFixed(0);
            priceEl.textContent = '₩' + parseInt(price).toLocaleString();
        }, 8000);
    }

});
