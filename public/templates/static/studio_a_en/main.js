gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-title', { opacity: 0, y: 20, duration: 1, ease: 'power3.out', delay: 0.3 });
gsap.from('.btn-hero', { opacity: 0, y: 20, duration: 1, ease: 'power3.out', delay: 0.5 });
gsap.from('.hero-line', { scaleY: 0, transformOrigin: 'top', duration: 1, ease: 'power3.out', delay: 0.7 });

gsap.utils.toArray('.reveal').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => el.classList.add('visible'),
  });
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Sent ✓';
    setTimeout(() => { btn.textContent = 'Send Inquiry'; }, 3000);
  });
}
