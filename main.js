// Login/Signup tab switcher logic for split layout
document.addEventListener('DOMContentLoaded', function() {
  const tabSignin = document.getElementById('tab-signin');
  const tabSignup = document.getElementById('tab-signup');
  const formSignin = document.getElementById('form-signin');
  const formSignup = document.getElementById('form-signup');
  const loginSplit = document.getElementById('loginSplit');
  const signupLink = document.getElementById('signupLink');
  const signinLink = document.getElementById('signinLink');

  function showSignIn() {
    tabSignin.classList.add('active');
    tabSignup.classList.remove('active');
    formSignin.style.display = '';
    formSignup.style.display = 'none';
    loginSplit.classList.remove('signup-active');
  }
  function showSignUp() {
    tabSignup.classList.add('active');
    tabSignin.classList.remove('active');
    formSignup.style.display = '';
    formSignin.style.display = 'none';
    loginSplit.classList.add('signup-active');
  }
  tabSignin && tabSignin.addEventListener('click', showSignIn);
  tabSignup && tabSignup.addEventListener('click', showSignUp);
  signupLink && signupLink.addEventListener('click', function(e) { e.preventDefault(); showSignUp(); });
  signinLink && signinLink.addEventListener('click', function(e) { e.preventDefault(); showSignIn(); });
});
// Tab switcher logic for login/signup (login.html)
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.login-tab');
  const forms = document.querySelectorAll('.login-form');
  if (tabs.length && forms.length) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        forms.forEach(f => f.style.display = 'none');
        forms[idx].style.display = 'flex';
      });
    });
  }
});
// Nav pill indicator and smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  let lastActiveSection = 'home';
  let scrollSpyEnabled = true;
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const indicator = nav.querySelector('.nav-indicator');
  const links = Array.from(nav.querySelectorAll('.nav-link'));

  function moveIndicator(target) {
    if (!indicator || !target) return;
    const navRect = nav.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    const left = rect.left - navRect.left;
    const width = rect.width;
    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${left}px) translateY(-50%)`;
  }

  function initIndicator() {
    const active = nav.querySelector('.nav-link.active');
    if (active) {
      moveIndicator(active);
      indicator.style.opacity = '1';
    } else {
      indicator.style.width = '0';
    }
  }

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          links.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          moveIndicator(this);
          // Temporarily disable scroll spy during smooth scroll
          scrollSpyEnabled = false;
          setTimeout(() => { scrollSpyEnabled = true; }, 700);
          if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          // Track last active section
          lastActiveSection = href.replace('#', '');
        }
      }
    });
    link.addEventListener('mouseenter', () => moveIndicator(link));
    link.addEventListener('mouseleave', () => {
      const active = nav.querySelector('.nav-link.active') || links[0];
      moveIndicator(active);
    });
  });
  window.addEventListener('resize', initIndicator);
  setTimeout(initIndicator, 100);

  // Scroll spy: set Home active when hero is in view
  window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const about = document.getElementById('about');
    if (!hero || !about) return;
    const heroRect = hero.getBoundingClientRect();
    const aboutRect = about.getBoundingClientRect();
    if (!scrollSpyEnabled) return;
    // If About section is in view, highlight About
    if (aboutRect.top <= 120 && aboutRect.bottom > 200) {
      if (lastActiveSection !== 'about') {
        links.forEach(l => l.classList.remove('active'));
        const aboutLink = nav.querySelector('.nav-link[href="#about"]');
        if (aboutLink) {
          aboutLink.classList.add('active');
          moveIndicator(aboutLink);
          lastActiveSection = 'about';
        }
      }
    } else if (heroRect.top <= 80 && heroRect.bottom > 120) {
      if (lastActiveSection !== 'home') {
        links.forEach(l => l.classList.remove('active'));
        const homeLink = nav.querySelector('.nav-link[href="#home"]');
        if (homeLink) {
          homeLink.classList.add('active');
          moveIndicator(homeLink);
          lastActiveSection = 'home';
        }
      }
    }
  });
});


// Fade-in effect for ride slides on scroll
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.ride-slide');
  function checkSlides() {
    const trigger = window.innerHeight * 0.85;
    slides.forEach(slide => {
      const rect = slide.getBoundingClientRect();
      if (rect.top < trigger) {
        slide.classList.add('visible');
      }
    });
  }
  checkSlides();
  window.addEventListener('scroll', checkSlides);
});
// Hamburger menu for mobile nav
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
  });
  // Close mobile nav on link click or outside click
  mobileNav.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link')) {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('click', function(e) {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
