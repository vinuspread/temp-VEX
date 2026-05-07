/*
   Vinuspread - Modern Premium Interactivity
   Reference: Aureva Pattern
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. GNB Scroll Detection
    const navbar = document.querySelector('.navbar');
    const updateNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    };
    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initial check

    // 2. Reveal Animations (GSAP ScrollTrigger)
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal').forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => el.classList.add('visible'),
        });
    });

    // 3. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close other items for single-open accordion
            faqItems.forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 4. Testimonial Slider
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.btn-slider.next');
    const prevBtn = document.querySelector('.btn-slider.prev');
    let currentIndex = 0;

    if (track && slides.length > 0) {
        const updateSlider = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            });
        }
    }

    // 5. Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 6. Cart Logic (Demo)
    const addBtns = document.querySelectorAll('.btn-add');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    if (addBtns.length > 0 && cartCount) {
        addBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                count++;
                cartCount.textContent = count;
                
                // Visual feedback
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Added ✓';
                btn.classList.add('btn-primary');
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            });
        });
    }

    // 7. Shop Pagination
    const pageButtons = document.querySelectorAll('.page-btn');
    const ITEMS_PER_PAGE = 6;
    if (pageButtons.length > 0) {
        const allCards = () => Array.from(document.querySelectorAll('.product-card:not(.hidden)'));

        const showPage = (page) => {
            const cards = allCards();
            cards.forEach((card, i) => {
                card.style.display = (i >= (page - 1) * ITEMS_PER_PAGE && i < page * ITEMS_PER_PAGE) ? '' : 'none';
            });
            pageButtons.forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.page) === page));
        };

        const updatePagination = () => {
            const cards = allCards();
            const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
            pageButtons.forEach(btn => {
                btn.style.display = parseInt(btn.dataset.page) <= totalPages ? '' : 'none';
            });
            showPage(1);
        };

        pageButtons.forEach(btn => {
            btn.addEventListener('click', () => showPage(parseInt(btn.dataset.page)));
        });

        updatePagination();
    }

    // 8. Sticky CTA Detection
    const stickyCta = document.querySelector('.sticky-cta');
    const buyBtn = document.querySelector('.product-main-info .btn-primary');
    if (stickyCta && buyBtn) {
        window.addEventListener('scroll', () => {
            const btnPos = buyBtn.getBoundingClientRect().bottom;
            if (btnPos < 0) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }
});
