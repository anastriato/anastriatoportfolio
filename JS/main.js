// ── MOBILE NAV TOGGLE ───────────────────────
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── GALLERY SCROLL REVEAL ────────────────────
const items = document.querySelectorAll('.gallery-item');

if (items.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger each item slightly
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.index || 0) * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  items.forEach((item, i) => {
    item.dataset.index = i;
    observer.observe(item);
  });
}

// ── NAVBAR SCROLL SHADOW ─────────────────────
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.background = 'rgba(14,14,14,0.97)';
    } else {
      navbar.style.background = 'rgba(14,14,14,0.85)';
    }
  }, { passive: true });
}
