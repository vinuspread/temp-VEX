gsap.registerPlugin(ScrollTrigger);

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

gsap.from('.hero-content', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.3 });

gsap.utils.toArray('.reveal').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => el.classList.add('visible'),
  });
});
