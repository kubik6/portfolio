gsap.registerPlugin(ScrollTrigger);

const features = document.querySelectorAll('.feature');

features.forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',    
      toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power4.out'
  });
});