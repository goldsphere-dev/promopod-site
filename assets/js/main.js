/* ============================================================
   PROMOPOD — MAIN JAVASCRIPT
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     NAVBAR — Sticky + Scroll State + Hamburger
     ============================================================ */
  function initNavbar() {
    var navbar = document.querySelector('.navbar');
    var hamburger = document.querySelector('.navbar__hamburger');
    var mobileMenu = document.querySelector('.navbar__mobile');

    if (!navbar) return;

    // Sticky scroll state
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });

    // Hamburger toggle
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      });

      // Close on mobile link click
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target) && mobileMenu.classList.contains('open')) {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    // Active link highlight
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar__nav a, .navbar__mobile a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ============================================================
     SMOOTH SCROLL — Anchor links
     ============================================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          var navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
          var targetPos = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      });
    });
  }

  /* ============================================================
     FADE-IN ANIMATIONS — Intersection Observer
     ============================================================ */
  function initFadeAnimations() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all elements
      document.querySelectorAll('.fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -32px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============================================================
     FORM — Beta Signup Handler
     ============================================================ */
  function initBetaForm() {
    var form = document.getElementById('betaForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var traderType = form.querySelector('#traderType');
      var submitBtn = form.querySelector('[type="submit"]');
      var successMsg = document.getElementById('formSuccess');

      // Basic validation
      if (!email || !email.value.trim()) {
        showFieldError(email, 'Email address is required.');
        return;
      }

      if (!isValidEmail(email.value.trim())) {
        showFieldError(email, 'Please enter a valid email address.');
        return;
      }

      // Disable button during submission
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      // Simulate form submission (replace with actual endpoint)
      setTimeout(function () {
        form.style.display = 'none';
        if (successMsg) {
          successMsg.style.display = 'block';
        }
      }, 800);
    });

    function showFieldError(field, message) {
      if (!field) return;
      field.style.borderColor = '#ef4444';
      field.focus();
      var existing = field.parentElement.querySelector('.field-error');
      if (existing) existing.remove();
      var err = document.createElement('span');
      err.className = 'field-error';
      err.style.cssText = 'font-size:0.8rem;color:#ef4444;display:block;margin-top:4px;';
      err.textContent = message;
      field.parentElement.appendChild(err);

      field.addEventListener('input', function () {
        field.style.borderColor = '';
        if (err.parentElement) err.remove();
      }, { once: true });
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  }

  /* ============================================================
     BREATHING ANIMATION — Nervous System page
     ============================================================ */
  function initBreathingAnimation() {
    var circles = document.querySelectorAll('.breathing-step__circle');
    if (!circles.length) return;

    // Subtle pulse on the breathing circles
    circles.forEach(function (circle, i) {
      circle.style.animationDelay = (i * 0.3) + 's';
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    initNavbar();
    initSmoothScroll();
    initFadeAnimations();
    initBetaForm();
    initBreathingAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
