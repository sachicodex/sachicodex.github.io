(function () {
  const LOADER_ID = 'siteLoader';
  const STYLE_ID = 'siteLoaderStyles';
  const LOGO_SRC = 'res/favicon/android-chrome-512x512.png';
  const MIN_VISIBLE_MS = 2000;
  let shownAt = 0;

  const LOADER_CSS = `
:root {
  --loader-bg: radial-gradient(900px 520px at 50% 20%, rgba(255, 170, 40, 0.18), transparent 60%),
    radial-gradient(900px 520px at 50% 80%, rgba(255, 120, 20, 0.14), transparent 62%),
    linear-gradient(180deg, #0a0b0e, #050609 70%);
  --loader-ring: rgba(255, 175, 70, 0.25);
  --loader-glow: rgba(255, 135, 20, 0.45);
  --loader-text: rgba(248, 248, 255, 0.85);
}

body.is-loading {
  overflow: hidden;
}

.site-loader {
  position: fixed;
  inset: 0;
  z-index: 20000;
  display: grid;
  place-items: center;
  background: var(--loader-bg);
  transition: opacity 0.6s ease, visibility 0.6s ease, transform 0.6s ease;
  opacity: 1;
  visibility: visible;
  transform: translateZ(0);
}

.site-loader.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: scale(1.02);
}

.loader-inner {
  display: grid;
  gap: 18px;
  place-items: center;
  text-align: center;
}

.loader-ring {
  width: clamp(200px, 18vw, 200px);
  height: clamp(200px, 18vw, 200px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at center, rgba(255, 140, 35, 0.18), rgba(255, 140, 35, 0.02) 60%, transparent 70%);
  border: 1px solid var(--loader-ring);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5), 0 0 60px var(--loader-glow);
}

.loader-logo {
  width: 65%;
  height: 65%;
  object-fit: contain;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45));
  animation: loader-spin 2.2s linear infinite;
  transform-origin: center;
}

.loader-text {
  font-family: var(--font-secondary);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(12px, 1.3vw, 15px);
  color: var(--loader-text);
}

.loader-subtext {
  font-family: var(--font-ternary);
  font-size: clamp(11px, 1vw, 13px);
  color: rgba(248, 248, 255, 0.6);
}

@keyframes loader-spin {
  0%{
  transform: scale(0.75)}
  50%{
  transform: scale(0.95)}
  100%{
  transform: scale(0.75)}
}

`;

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = LOADER_CSS;
    document.head.appendChild(style);
  }

  function buildLoader() {
    if (document.getElementById(LOADER_ID)) return null;

    const wrapper = document.createElement('div');
    wrapper.className = 'site-loader';
    wrapper.id = LOADER_ID;
    wrapper.setAttribute('aria-hidden', 'true');

    wrapper.innerHTML =
      '<div class="loader-inner">' +
      '  <div class="loader-ring">' +
      '    <img class="loader-logo" src="' + LOGO_SRC + '" alt="" />' +
      '  </div>' +
      '  <div class="loader-text">Loading</div>' +
      '  <div class="loader-subtext">Preparing the experience</div>' +
      '</div>';

    document.body.appendChild(wrapper);
    return wrapper;
  }

  function show() {
    ensureStyles();
    document.body.classList.add('is-loading');

    const loader = document.getElementById(LOADER_ID) || buildLoader();
    if (!loader) return;

    shownAt = Date.now();
    loader.classList.remove('is-hidden');
  }

  function hide() {
    const loader = document.getElementById(LOADER_ID);
    if (!loader) return;

    loader.classList.add('is-hidden');
    document.body.classList.remove('is-loading');
  }

  window.SiteLoader = {
    show,
    hide,
  };

  ensureStyles();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', show, { once: true });
  } else {
    show();
  }

  window.addEventListener('load', () => {
    const elapsed = Date.now() - shownAt;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
    setTimeout(() => {
      hide();
    }, remaining + 450);
  });
})();
