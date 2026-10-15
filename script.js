// --- CASE STUDY DATA ---
const caseStudiesData = {
  'hero-realty': {
    tag: 'Hero Realty — Case Study',
    title: 'Transforming Legacy Corporate Site into High-Converting Luxury Showroom',
    summary: 'Executed an end-to-end UI/UX redesign from scratch to eliminate cognitive load, streamline complex property navigation, and transform high-friction lead capture into a seamless luxury buying experience.',
    image: 'hero_realty.jpg',
    metrics: [
      { val: '+25%', label: 'User Retention Rate' },
      { val: '10x', label: 'Session Time (12s to 2m)' },
      { val: '−30%', label: 'Bounce Rate Reduction' }
    ],
    overview: `Hero Realty required a digital presence that matched the prestige of their physical luxury properties. Their legacy platform struggled with dense global navigation, overwhelming property detail pages, and high-friction inquiry forms that actively bottlenecked lead generation. As Lead UX Designer, I led a ground-up redesign to transform a cluttered corporate site into an immersive, high-converting property showroom.`,
    challenges: [
      { h3: 'Navigation Paralysis', p: 'An overloaded global menu and dense footer architecture made discovering specific property types and locations frustrating and slow.' },
      { h3: 'Cluttered Property Showcases', p: 'Dense, text-heavy information architecture buried critical buying details like floor plans, pricing, and premium amenities under walls of text.' },
      { h3: 'High-Friction Lead Capture', p: 'A tedious and uninviting inquiry process created a massive bottleneck, discouraging potential high-intent buyers from connecting with the sales team.' }
    ],
    chapters: [
      {
        h2: 'Chapter 1: Auditing Usability Friction',
        p: 'Before pushing pixels, we audited the existing experience to identify where high-intent users were dropping off. We found that 68% of users dropped off during property filtering due to nested menus, while inquiry completion sat at less than 4%.'
      },
      {
        h2: 'Chapter 2: Strategic Design Interventions',
        p: 'We established a visual design system built around generous negative space, editorial typography, and immersive property photography. Key interventions included:'
      }
    ],
    pillars: [
      { h3: 'Streamlined Discovery', p: 'Replaced overwhelming dropdowns with predictive navigation guided by property type and location.' },
      { h3: 'Digital Brochure Showcases', p: 'Segmented complex property data into scannable, distinct sections with scannable specs sheets.' },
      { h3: 'Frictionless Inquiry UX', p: 'Re-engineered the lead capture flow into an elegant, contextual 2-step inquiry drawer.' },
      { h3: 'Responsive Fluidity', p: 'Upgraded touch targets and responsive breakpoints for a 60fps app-like feel across desktop and mobile.' }
    ]
  },

  'kajaria': {
    tag: 'Kajaria Ceramics — Case Study',
    title: 'Modernizing India’s Largest Tile Manufacturer for High-Intent Buyers',
    summary: 'Overhauled a fragmented product catalog into an intelligent digital ecosystem featuring predictive multi-faceted search, an AR "Try in Room" visualizer, and an offline store locator.',
    image: 'kajaria.jpg',
    video: 'thumbnail-final.mp4',
    metrics: [
      { val: '−30%', label: 'Bounce Rate Reduction' },
      { val: '+65%', label: 'Scroll Depth Increase' },
      { val: '< 6s', label: 'Time-to-Find Tiles' }
    ],
    overview: `Kajaria Ceramics is India's largest manufacturer of ceramic and vitrified tiles. Despite market leadership, their legacy web presence suffered from low engagement (12s average session time), fragmented search criteria, and a total disconnect between digital browsing and offline retail conversion. I led a full ground-up redesign to shift the website from a static brochure to a high-converting lead engine.`,
    challenges: [
      { h3: 'High Search Friction', p: 'Users could not intuitively filter tiles by finish, texture, size, or specific room application.' },
      { h3: 'The Retail Dead-End', p: 'There was no clear path from shortlisting a product online to locating a physical nearby verified dealer.' },
      { h3: 'Missing Product Intelligence', p: 'Lack of price transparency, technical spec sheets, and visualization tools caused high drop-off rates.' }
    ],
    chapters: [
      {
        h2: 'Chapter 1: Immersive Discovery & Intelligence',
        p: 'Designed a predictive multi-category search modal that suggests product categories, sizes, colors, and finishes in real-time, alongside a visual "Search by Image" engine.'
      },
      {
        h2: 'Chapter 2: High-Intent Product Detail Page (PDP)',
        p: 'Integrated an augmented reality (AR) "Try in Room" visualizer allowing users to upload photos of their own living spaces, apply selected tiles, and estimate quantity via an interactive calculator.'
      }
    ],
    pillars: [
      { h3: 'Predictive Search Engine', p: 'Real-time category suggestions by room, finish, size, and room texture.' },
      { h3: 'AR Room Visualizer', p: 'Side-by-side tile comparison on real user uploaded room photographs.' },
      { h3: 'Offline Store Locator Map', p: 'Bridged digital browsing with offline retail via verified dealer location mapping.' },
      { h3: 'Corporate Investor Portal', p: 'Streamlined corporate governance and financial metrics into a scannable dashboard.' }
    ]
  }
};

// --- MODAL SYSTEM ---
function openModal(id) {
  const data = caseStudiesData[id];
  if (!data) return;

  const modalBackdrop = document.getElementById('caseModal');
  const modalContent = document.getElementById('modalContent');

  modalContent.innerHTML = `
    <div class="modal-hero-tag">${data.tag}</div>
    <h1 class="modal-title">${data.title}</h1>
    <p class="modal-summary">${data.summary}</p>
    
    ${data.video ? `
      <video autoplay loop muted playsinline poster="${data.image}" class="modal-hero-img" style="width: 100%; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 2.5rem;">
        <source src="${data.video}" type="video/mp4">
      </video>
    ` : `
      <img src="${data.image}" alt="${data.title}" class="modal-hero-img">
    `}

    <div class="modal-grid-metrics">
      ${data.metrics.map(m => `
        <div class="modal-metric-card">
          <span class="modal-metric-value">${m.val}</span>
          <span class="modal-metric-label">${m.label}</span>
        </div>
      `).join('')}
    </div>

    <h2 class="modal-section-h2">Executive Overview</h2>
    <p class="modal-p">${data.overview}</p>

    <h2 class="modal-section-h2">The Challenge & Friction Points</h2>
    <div class="modal-pillar-list">
      ${data.challenges.map(c => `
        <div class="modal-pillar-item">
          <h3 class="modal-pillar-h3">${c.h3}</h3>
          <p class="modal-p" style="margin:0">${c.p}</p>
        </div>
      `).join('')}
    </div>

    ${data.chapters.map(ch => `
      <h2 class="modal-section-h2">${ch.h2}</h2>
      <p class="modal-p">${ch.p}</p>
    `).join('')}

    <h2 class="modal-section-h2">Key Strategic Solutions</h2>
    <div class="modal-pillar-list">
      ${data.pillars.map(p => `
        <div class="modal-pillar-item">
          <h3 class="modal-pillar-h3">${p.h3}</h3>
          <p class="modal-p" style="margin:0">${p.p}</p>
        </div>
      `).join('')}
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalBackdrop = document.getElementById('caseModal');
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnBackdrop(e) {
  if (e.target.id === 'caseModal') {
    closeModal();
  }
}

// ESC Key listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// --- STATS ANIMATED COUNTER ---
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(numEl => {
          const target = parseInt(numEl.getAttribute('data-target'), 10);
          let current = 0;
          const increment = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            numEl.textContent = current.toLocaleString();
          }, 35);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-banner');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// --- LIVE CLOCK TICKER ---
function initLiveClock() {
  const clockEl = document.getElementById('clockTime');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    clockEl.textContent = `${hours}:${minutes} ${ampm}`;
  }

  updateTime();
  setInterval(updateTime, 10000);
}

// --- MAGNETIC BUTTON HOVER EFFECT ---
function initMagneticButtons() {
  const magnetics = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-black-pill, .nav-btn-contact, .contact-email-btn');

  magnetics.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

// --- THEME SWITCHER SYSTEM ---
function initThemeSwitcher() {
  const themeButtons = document.querySelectorAll('.theme-option-btn');
  if (!themeButtons.length) return;

  // Read saved theme or default to citric
  let savedTheme = 'citric';
  try {
    savedTheme = localStorage.getItem('portfolio-theme') || 'citric';
  } catch (e) {
    // localStorage may be unavailable
  }

  applyTheme(savedTheme, false);

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.dataset.themeName;
      applyTheme(targetTheme, true);
    });
  });

  function applyTheme(themeName, persist) {
    if (themeName && themeName !== 'citric') {
      document.documentElement.setAttribute('data-theme', themeName);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    themeButtons.forEach(btn => {
      const isActive = btn.dataset.themeName === themeName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    if (persist) {
      try {
        localStorage.setItem('portfolio-theme', themeName);
      } catch (e) {
        // Safe fallback
      }
    }
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initStatsCounter();
  initMagneticButtons();
  initLiveClock();
  initThemeSwitcher();
});
