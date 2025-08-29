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
// Theme swipe transition effect for new switch
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('toggle-switch');
  const body = document.body;
  const swipe = document.querySelector('.theme-swipe');
  if (!themeSwitch || !swipe) return;
  // Set initial state based on theme
});
// Nav pill swipe indicator logic
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const indicator = nav.querySelector('.nav-indicator');
  const links = Array.from(nav.querySelectorAll('.nav-link'));

  function moveIndicator(target) {
    const navRect = nav.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    const left = rect.left - navRect.left + nav.scrollLeft;
    const width = rect.width;
    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${left}px)`;
  }

  function initIndicator() {
    const active = nav.querySelector('.nav-link.active') || links[0];
    if (active) moveIndicator(active);
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      moveIndicator(link);
    });
    link.addEventListener('mouseenter', () => moveIndicator(link));
    link.addEventListener('mouseleave', () => {
      const active = nav.querySelector('.nav-link.active') || links[0];
      moveIndicator(active);
    });
  });
  window.addEventListener('resize', initIndicator);
  initIndicator();
});
// Navbar section toggle logic
document.addEventListener('DOMContentLoaded', function() {
  const nav1 = document.querySelector('.nav-section-1');
  const nav2 = document.querySelector('.nav-section-2');
  const toggleBtn = document.getElementById('theme-toggle');
  let showingFirst = true;
  if (nav1 && nav2 && toggleBtn) {
    nav1.classList.add('active');
  }
});
// Update active nav link on click
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-pill .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

