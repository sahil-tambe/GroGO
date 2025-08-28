// Theme swipe transition effect for new switch
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('toggle-switch');
  const body = document.body;
  const swipe = document.querySelector('.theme-swipe');
  if (!themeSwitch || !swipe) return;
  // Set initial state based on theme
  themeSwitch.checked = body.classList.contains('dark');
  themeSwitch.addEventListener('change', function(e) {
    // Animate swipe
    body.classList.add('theme-transitioning');
    swipe.style.transition = 'none';
    swipe.style.transform = 'translateX(-100vw)';
    void swipe.offsetWidth; // force reflow
    swipe.style.transition = '';
    swipe.style.transform = 'translateX(0)';
    setTimeout(() => {
      // Actually toggle theme after swipe covers
      if (themeSwitch.checked) {
        body.classList.remove('light');
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
      }
      // Slide swipe away
      swipe.style.transform = 'translateX(100vw)';
      setTimeout(() => {
        swipe.style.transition = 'none';
        swipe.style.transform = 'translateX(-100vw)';
        body.classList.remove('theme-transitioning');
      }, 700);
    }, 400);
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
// Navbar section toggle logic
document.addEventListener('DOMContentLoaded', function() {
  const nav1 = document.querySelector('.nav-section-1');
  const nav2 = document.querySelector('.nav-section-2');
  const toggleBtn = document.getElementById('theme-toggle');
  let showingFirst = true;
  if (nav1 && nav2 && toggleBtn) {
    nav1.classList.add('active');
    toggleBtn.addEventListener('click', function() {
      if (showingFirst) {
        nav1.classList.remove('active');
        setTimeout(() => {
          nav1.style.display = 'none';
          nav2.style.display = '';
          nav2.classList.add('active');
        }, 400);
      } else {
        nav2.classList.remove('active');
        setTimeout(() => {
          nav2.style.display = 'none';
          nav1.style.display = '';
          nav1.classList.add('active');
        }, 400);
      }
      showingFirst = !showingFirst;
    });
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



