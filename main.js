// ─── TIMELINE DATA ───
const timelineData = [
  { num: 'I',    year: 1985, name: 'AJ 1',  colorway: 'Chicago' },
  { num: 'II',   year: 1986, name: 'AJ 2',  colorway: 'White/Red' },
  { num: 'III',  year: 1988, name: 'AJ 3',  colorway: 'Black Cement' },
  { num: 'IV',   year: 1989, name: 'AJ 4',  colorway: 'Bred', featured: true },
  { num: 'V',    year: 1990, name: 'AJ 5',  colorway: 'Fire Red' },
  { num: 'VI',   year: 1991, name: 'AJ 6',  colorway: 'Infrared' },
  { num: 'VII',  year: 1992, name: 'AJ 7',  colorway: 'Olympic' },
  { num: 'VIII', year: 1993, name: 'AJ 8',  colorway: 'Playoffs' },
  { num: 'IX',   year: 1994, name: 'AJ 9',  colorway: 'Black/Red' },
  { num: 'X',    year: 1995, name: 'AJ 10', colorway: 'Shadow' },
  { num: 'XI',   year: 1995, name: 'AJ 11', colorway: 'Concord' },
  { num: 'XII',  year: 1997, name: 'AJ 12', colorway: 'Royals' },
  { num: 'XIII', year: 1998, name: 'AJ 13', colorway: 'He Got Game' },
];

// ─── ICONS DATA ───
const iconsData = [
  { num: 'I',    year: 1985, name: 'Air Jordan 1', colorway: 'Chicago',      accent: '#cc0000' },
  { num: 'II',   year: 1986, name: 'Air Jordan 2', colorway: 'White / Red',  accent: '#cc0000' },
  { num: 'III',  year: 1988, name: 'Air Jordan 3', colorway: 'Black Cement', accent: '#888' },
  { num: 'V',    year: 1990, name: 'Air Jordan 5', colorway: 'Fire Red',     accent: '#cc0000' },
  { num: 'VI',   year: 1991, name: 'Air Jordan 6', colorway: 'Infrared',     accent: '#ff4500' },
  { num: 'VII',  year: 1992, name: 'Air Jordan 7', colorway: 'Olympic',      accent: '#1a3a8f' },
  { num: 'VIII', year: 1993, name: 'Air Jordan 8', colorway: 'Playoffs',     accent: '#cc0000' },
  { num: 'XI',   year: 1995, name: 'Air Jordan 11',colorway: 'Concord',      accent: '#7b68ee' },
  { num: 'XII',  year: 1997, name: 'Air Jordan 12',colorway: 'Royals',       accent: '#1a3a8f' },
  { num: 'XIII', year: 1998, name: 'Air Jordan 13',colorway: 'He Got Game',  accent: '#fff' },
];

// ─── BUILD TIMELINE ───
function buildMiniShoe(color) {
  return `<svg viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="70" height="28">
    <ellipse cx="40" cy="33" rx="30" ry="3" fill="rgba(0,0,0,0.4)"/>
    <path d="M10 28 Q12 31 40 32 Q68 31 70 28 L69 25 Q40 30 11 25Z" fill="#1a1a1a"/>
    <path d="M11 25 Q12 27 40 28 Q68 27 69 25 L68 21 Q40 26 12 21Z" fill="#b0a99a"/>
    <path d="M12 21 Q14 8 32 6 Q54 4 65 10 Q70 14 68 21 Q54 25 12 21Z" fill="#0d0d0d"/>
    <path d="M12 21 Q14 12 20 9 Q28 6 34 8 Q28 14 28 21Z" fill="#111"/>
    <path d="M28 20 Q30 12 36 9 Q44 6 52 7 Q48 14 47 20Z" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.7"/>
    <path d="M32 6 Q40 3 48 6 Q46 12 44 16 Q40 14 36 16 Q34 12 32 6Z" fill="#0d0d0d"/>
    <path d="M11 25 Q12 24 40 25 Q68 24 69 25" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.6"/>
  </svg>`;
}

const tContainer = document.getElementById('timelineShoes');
timelineData.forEach(shoe => {
  const el = document.createElement('div');
  el.className = `t-shoe${shoe.featured ? ' featured' : ''}`;
  el.innerHTML = `
    <div class="t-dot"></div>
    <div class="t-mini-shoe">${buildMiniShoe(shoe.featured ? '#cc0000' : '#555')}</div>
    <div class="t-info">
      <div class="t-name">${shoe.num}</div>
      <div class="t-year">${shoe.year}</div>
      ${shoe.featured ? '<div class="t-featured-badge">✦ Bred</div>' : ''}
    </div>
  `;
  tContainer.appendChild(el);
});

// ─── BUILD ICONS GRID ───
const grid = document.getElementById('iconsGrid');
iconsData.forEach((shoe, i) => {
  const el = document.createElement('div');
  el.className = 'icon-card reveal';
  el.style.transitionDelay = `${(i % 5) * 0.07}s`;
  el.innerHTML = `
    <div class="shoe-num">${shoe.num}</div>
    <div class="icon-mini-shoe">${buildMiniShoe(shoe.accent)}</div>
    <div class="shoe-name">${shoe.name}</div>
    <div class="shoe-colorway">${shoe.colorway}</div>
    <div class="shoe-year">${shoe.year}</div>
  `;
  grid.appendChild(el);
});

// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ─── PARALLAX BG TEXT ───
const bgText = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (bgText) bgText.style.transform = `translate(-50%, calc(-50% + ${y * 0.3}px))`;
}, { passive: true });
