gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-content', { opacity: 0, y: 30, duration: 1.5, ease: 'power3.out', delay: 0.3 });

gsap.utils.toArray('.reveal').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => el.classList.add('visible'),
  });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
