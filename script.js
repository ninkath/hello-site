// script.js
(() => {
  // Backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'lightbox-backdrop';
  backdrop.innerHTML = '<button aria-label="Close">✕</button><img alt="">';
  document.body.appendChild(backdrop);

  const imgEl = backdrop.querySelector('img');
  const close = () => backdrop.classList.remove('show');

  // Close handlers
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target.tagName === 'BUTTON') close();
  });
  document.addEventListener('keydown', (e) => (e.key === 'Escape') && close());

  // Open on click for anything with data-lightbox
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lightbox]');
    if (!t) return;
    e.preventDefault();
    // Prefer data-full, fall back to src or href
    const src = t.dataset.full || t.src || t.href;
    if (!src) return;
    imgEl.src = src;
    imgEl.alt = t.alt || '';
    backdrop.classList.add('show');
  });
})();
