document.addEventListener('DOMContentLoaded', () => {

    // 1. Breaking news ticker duplicate (seamless loop)
    const track = document.querySelector('.breaking-track');
    if (track) {
        track.innerHTML += track.innerHTML;
    }

    // 2. Active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-sections a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. Section page pagination
    const pageButtons = document.querySelectorAll('.page-btn:not(.dots)');
    const sectionCards = document.querySelectorAll('.section-card');
    const CARDS_PER_PAGE = 6;

    if (pageButtons.length > 0 && sectionCards.length > 0) {
        const showPage = (page) => {
            sectionCards.forEach((card, i) => {
                card.style.display = (i >= (page - 1) * CARDS_PER_PAGE && i < page * CARDS_PER_PAGE) ? '' : 'none';
            });
            pageButtons.forEach(btn => {
                btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pageButtons.forEach(btn => {
            btn.addEventListener('click', () => showPage(parseInt(btn.dataset.page)));
        });
        showPage(1);
    }

    // 4. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
