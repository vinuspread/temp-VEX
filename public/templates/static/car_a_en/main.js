document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    // Model filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modelRows = document.querySelectorAll('.model-row[data-type]');
    if (filterBtns.length && modelRows.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const f = btn.dataset.filter;
                modelRows.forEach(row => {
                    row.style.display = (f === 'all' || row.dataset.type === f) ? '' : 'none';
                });
            });
        });
    }

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

});
