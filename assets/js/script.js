const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const nav = document.querySelector('nav');
const btn = document.querySelector('.menu-toggle');
const navLinks = nav.querySelectorAll('ul li a');

const details = document.querySelectorAll('.faq-content details');

const slideGap = 16;

let index = 1;
let isAnimating = false;

const slides = Array.from(carousel.children);
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
carousel.insertBefore(lastClone, slides[0]);
carousel.appendChild(firstClone);

const totalItems = carousel.children.length;

function getSlideWidth() {
  return carousel.children[0].offsetWidth + slideGap;
}

function updateCarousel(instant = false) {
  const offset = index * getSlideWidth();
  carousel.style.transition = instant ? 'none' : 'transform 0.5s ease';
  carousel.style.transform = `translateX(-${offset}px)`;
}

function moveTo(direction) {
  if (isAnimating) return;
  isAnimating = true;

  index += direction;
  updateCarousel();

  carousel.addEventListener('transitionend', () => {
    if (index === totalItems - 1) {
      index = 1;
      updateCarousel(true);
    } else if (index === 0) {
      index = totalItems - 2;
      updateCarousel(true);
    }

    setTimeout(() => {
      isAnimating = false;
    }, 20);
  }, { once: true });
}

leftArrow.addEventListener('click', () => moveTo(-1));
rightArrow.addEventListener('click', () => moveTo(1));
window.addEventListener('resize', () => updateCarousel(true));

updateCarousel(true);

// touch events for carousel
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {
  const diffX = startX - endX;

  // Only trigger if swipe is significant
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      // Swiped left → move right
      moveTo(1);
    } else {
      // Swiped right → move left
      moveTo(-1);
    }
  }

  // Reset
  startX = 0;
  endX = 0;
});



// faq 
details.forEach((targetDetail) => {
  targetDetail.addEventListener('click', () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open');
      }
    });
  });
});


// menu toggle

// Toggle menu on hamburger click
btn.addEventListener('click', () => {
  nav.classList.toggle('open');
  const expanded = nav.classList.contains('open');
  btn.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
});

// Close menu when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-label', 'Open menu');
  });
});

// Close menu when clicking outside of nav
document.addEventListener('click', (e) => {
  const isClickInside = nav.contains(e.target) || btn.contains(e.target);
  if (!isClickInside) {
    nav.classList.remove('open');
    btn.setAttribute('aria-label', 'Open menu');
  }
});


// 

document
  .getElementById('contact-form')
  .addEventListener('submit', async e => {
    e.preventDefault();
    const res = await fetch(e.target.action, {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) e.target.innerHTML = '<p>Message sent—thank you!</p>';
    else alert('Error, please try again.');
  });