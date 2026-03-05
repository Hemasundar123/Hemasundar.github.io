/**
 * HEMASUNDAR PORTFOLIO — MAIN JAVASCRIPT
 * Features: custom cursor, typed text, navbar scroll,
 *           mobile menu, scroll animations, skill bars,
 *           dark/light theme, form validation, active nav
 */

/* ─── 1. CURSOR ─── */
(function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Smooth follower
  (function animateFollower() {
    fx += (mx - fx) * 0.15;
    fy += (my - fy) * 0.15;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  })();

  // Hover effects
  document.querySelectorAll('a, button, .project-card, .cert-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      follower.style.transform = 'translate(-50%,-50%) scale(1.5)';
      follower.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.opacity = '0.6';
    });
  });
})();

/* ─── 2. TYPED TEXT ─── */
(function initTyped() {
  const el     = document.getElementById('typedRole');
  if (!el) return;
  const roles  = ['DevOps Engineer', 'Cloud Enthusiast', 'Backend Developer', 'Automation Lover'];
  let rIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const current = roles[rIdx];
    el.textContent = deleting
      ? current.substring(0, cIdx--)
      : current.substring(0, cIdx++);

    let delay = deleting ? 60 : 100;

    if (!deleting && cIdx > current.length) {
      delay = 1800; deleting = true;
    } else if (deleting && cIdx < 0) {
      deleting = false; rIdx = (rIdx + 1) % roles.length; cIdx = 0; delay = 400;
    }
    setTimeout(type, delay);
  }
  type();
})();

/* ─── 3. NAVBAR SCROLL ─── */
(function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);

    // Auto-hide on scroll down, show on scroll up
    if (y > lastY && y > 200) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastY = y;
  }, { passive: true });

  nav.style.transition = 'background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease';
})();

/* ─── 4. MOBILE MENU ─── */
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open.toString());
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();

/* ─── 5. ACTIVE NAV LINK (Intersection Observer) ─── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();

/* ─── 6. SCROLL REVEAL ─── */
(function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
})();

/* ─── 7. SKILL BAR ANIMATION ─── */
(function initSkillBars() {
  const fills = document.querySelectorAll('.skill-bar__fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const w    = fill.getAttribute('data-width') || '0';
        // Slight delay for visual pleasure
        setTimeout(() => { fill.style.width = w + '%'; }, 200);
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(f => observer.observe(f));
})();

/* ─── 8. DARK / LIGHT THEME ─── */
(function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');
  if (!toggle || !icon) return;

  const saved = localStorage.getItem('hs-theme') || 'dark';
  applyTheme(saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hs-theme', theme);
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }
})();

/* ─── 9. CONTACT FORM ─── */
(function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateForm()) return;

    // Show loading state
    const btnText    = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    btnText.style.display    = 'none';
    btnLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;

    // Simulate async send (replace with real backend/EmailJS)
    setTimeout(() => {
      btnText.style.display    = 'inline-flex';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
      success.style.display = 'block';
      form.reset();
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    }, 1600);
  });

  function validateForm() {
    let valid = true;

    const fields = [
      { id: 'name',    label: 'Name',    type: 'text'  },
      { id: 'email',   label: 'Email',   type: 'email' },
      { id: 'subject', label: 'Subject', type: 'text'  },
      { id: 'message', label: 'Message', type: 'text'  }
    ];

    fields.forEach(({ id, label, type }) => {
      const input = document.getElementById(id);
      const error = input?.parentElement.querySelector('.form-error');
      if (!input || !error) return;

      error.textContent = '';
      input.style.borderColor = '';

      if (!input.value.trim()) {
        error.textContent = `${label} is required.`;
        input.style.borderColor = '#f87171';
        valid = false;
      } else if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        error.textContent = 'Please enter a valid email address.';
        input.style.borderColor = '#f87171';
        valid = false;
      }
    });

    return valid;
  }
})();

/* ─── 10. SMOOTH SCROLL for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;
    window.scrollTo({
      top: target.offsetTop - navH,
      behavior: 'smooth'
    });
  });
});

/* ─── 11. KEYBOARD ACCESSIBILITY ─── */
document.querySelectorAll('.project-card, .cert-card').forEach(card => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const link = card.querySelector('a');
      if (link) link.click();
    }
  });
});
