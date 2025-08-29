// Fix for nav pill indicator
document.addEventListener('DOMContentLoaded', function() {
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
    const active = nav.querySelector('.nav-link.active') || links[0];
    if (active) {
      moveIndicator(active);
      // Ensure indicator is visible
      indicator.style.opacity = '1';
    }
  }

  // Handle click events
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      links.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Move indicator
      moveIndicator(this);
    });
  });

  // Initialize on load
  setTimeout(initIndicator, 100);
  
  // Reinitialize on window resize
  window.addEventListener('resize', initIndicator);
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

