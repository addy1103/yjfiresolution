import './style.css';
import {
  renderNavbar, renderHero, renderServices, renderAbout,
  renderProcess, renderWork, renderContact, renderFooter
} from './render.js';

// 1. Initialize App
const app = document.getElementById('app');

const initApp = () => {
  if (!app) return;

  // Render full page into #app
  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderServices()}
      ${renderAbout()}
      ${renderProcess()}
      ${renderWork()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;

  // 2. Re-bind Event Listeners after DOM is ready
  bindEventListeners();
};

const bindEventListeners = () => {
  // Navbar & Scroll
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
      });
      links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
      });
    });
  }

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll reveal
  const reveal = () => {
    document.querySelectorAll('[data-visible]:not(.is-visible)').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add('is-visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);

  // Initial Visibility tagging
  document.querySelectorAll(
    '.service-card, .step, .work-card, .about-content, .about-image-col, .contact-left, .contact-right'
  ).forEach((el, i) => {
    el.setAttribute('data-visible', '');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });
  reveal();

  // Contact Form
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
          form.reset();
          if (toast) {
            toast.querySelector('span').textContent = result.message || 'Message sent!';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
          }
        } else {
          alert(`Error: ${result.error || 'Unknown error'}`);
        }
      } catch (err) {
        console.error('Contact error:', err);
        alert('Could not send message. Please try again or call us.');
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }
};

// Start the app
initApp();
