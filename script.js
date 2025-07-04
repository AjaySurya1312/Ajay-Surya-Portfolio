


// --- Vanta.js Animated Fog Background ---
VANTA.FOG({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x00ffe7,
  midtoneColor: 0x111111,
  lowlightColor: 0xa259ff,
  baseColor: 0x0a0a0a,
  blurFactor: 0.7,
  speed: 1.2,
  zoom: 1.1
});

// --- Typed.js for animated tagline ---
new Typed('#typed-tagline', {
  strings: [
    "AI/ML Engineer | Web Innovator | Tech Explorer"
  ],
  typeSpeed: 45,
  backSpeed: 25,
  backDelay: 1200,
  loop: true,
  showCursor: true
});

// --- GSAP entrance animations ---
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-title', {y: 60, opacity: 0, duration: 1, ease: "bounce.out"});
  gsap.from('.hero-tagline', {y: 40, opacity: 0, duration: 1, delay: 0.3});
  gsap.from('.hero-cta', {scale: 0.7, opacity: 0, duration: 0.7, delay: 0.8, ease: "back.out(1.7)"});
  gsap.from('.scroll-down', {y: 30, opacity: 0, duration: 1, delay: 1.1, repeat: -1, yoyo: true});
});

// --- IntersectionObserver for scroll reveals ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// --- Vanilla Tilt for project cards ---
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 18,
  speed: 500,
  glare: true,
  "max-glare": 0.35,
});

// --- Navbar active link highlight and sticky background ---
const navLinks = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
  // Navbar background change
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// --- Hamburger menu for mobile ---
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// --- Contact form (demo only) ---
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out, Ajay will get back to you soon!');
  this.reset();
});
