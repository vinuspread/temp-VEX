gsap.registerPlugin(ScrollTrigger);

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

gsap.from('.hero-content', { opacity: 0, y: 30, duration: 1.5, ease: 'power3.out', delay: 0.3 });

gsap.to('#heroBg img', {
  scale: 1.15,
  ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
});

gsap.utils.toArray('.reveal').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => el.classList.add('visible'),
  });
});
