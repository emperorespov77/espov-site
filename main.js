// ── TAB FILTERING ─────────────────────────────────────
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.project-card[data-category]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeIn .3s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── SKILL BAR ANIMATION ───────────────────────────────
const animateBars = () => {
  const fills = document.querySelectorAll('.tech-fill');
  fills.forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
};

// Use IntersectionObserver so bars animate when scrolled into view
const rightPanel = document.querySelector('.right-panel');
if (rightPanel) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateBars(); observer.disconnect(); }
    });
  }, { threshold: 0.1 });
  observer.observe(rightPanel);
} else {
  setTimeout(animateBars, 400);
}

// ── MOBILE SIDEBAR TOGGLE ────────────────────────────
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay && overlay.classList.toggle('active');
  });

  overlay && overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
}

// ── FADE-IN ANIMATION ─────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .project-card { animation: fadeIn .4s ease both; }
  .project-card:nth-child(2) { animation-delay: .05s; }
  .project-card:nth-child(3) { animation-delay: .10s; }
  .project-card:nth-child(4) { animation-delay: .15s; }
  .project-card:nth-child(5) { animation-delay: .20s; }

  #overlay {
    display: none;
    position: fixed; inset: 0;
    background: rgba(0,0,0,.6);
    z-index: 98;
  }
  #overlay.active { display: block; }
`;
document.head.appendChild(style);

// ── ACTIVE NAV LINK ON SCROLL ─────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

if (sections.length && navLinks.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active-nav'));
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active-nav');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
}
