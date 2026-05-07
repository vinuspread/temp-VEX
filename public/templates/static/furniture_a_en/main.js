gsap.registerPlugin(ScrollTrigger);

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

gsap.from('.hero-content', { opacity: 0, x: -60, duration: 1.2, ease: 'power3.out', delay: 0.3 });
gsap.from('.hero-img', { opacity: 0, x: 60, duration: 1.2, ease: 'power3.out', delay: 0.3 });

gsap.utils.toArray('.reveal').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => el.classList.add('visible'),
  });
});

const form = document.querySelector('.newsletter-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    form.querySelector('input').value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; }, 3000);
  });
}
