gsap.registerPlugin(ScrollTrigger);

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Hero entrance
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
tl.from('.hero-bg',         { scale: 1.2, opacity: 0, duration: 2.5, ease: 'power2.out' })
  .from('.hero-eyebrow',    { opacity: 0, y: 20, duration: 0.8 }, '-=1.5')
  .from('.hero-title',      { opacity: 0, y: 30, duration: 1 }, '-=0.6')
  .from('.hero-btns',       { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
  .from('.navbar',          { opacity: 0, y: -20, duration: 0.8 }, '-=1.8');

// Scroll arrow bounce
gsap.to('#scroll-arrow', { y: 10, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });

// Scroll reveal
gsap.utils.toArray('.reveal').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => el.classList.add('visible'),
  });
});

// Newsletter form
const form = document.querySelector('.newsletter-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    form.querySelector('input').value = '';
    setTimeout(() => { btn.textContent = 'SUBSCRIBE'; }, 3000);
  });
}
