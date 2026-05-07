gsap.registerPlugin(ScrollTrigger);

gsap.from('#hero-title', { opacity: 0, y: 50, duration: 1.2, ease: 'power3.out', delay: 0.5 });
gsap.from('.intro-header', { opacity: 0, y: 30, duration: 1, ease: 'power3.out', delay: 0.2 });

gsap.utils.toArray('.reveal').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => el.classList.add('visible'),
  });
});

gsap.from('.quote-content', {
  opacity: 0, scale: 0.9, duration: 1, ease: 'power3.out',
  scrollTrigger: { trigger: '.quote-section', start: 'top 70%', once: true },
});
