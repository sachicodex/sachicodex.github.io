(function () {
  const LOADER_ID = 'siteLoader';
  const STYLE_ID = 'siteLoaderStyles';
  const LOGO_SRC = 'res/favicon/android-chrome-512x512.png';
  const MIN_VISIBLE_MS = 2000;
  let shownAt = 0;

  const LOADER_CSS = `
:root {
  --loader-bg:
    radial-gradient(620px 320px at 50% 46%, rgba(255, 136, 18, 0.14), transparent 65%),
    radial-gradient(1000px 700px at 50% 0%, rgba(255, 136, 18, 0.05), transparent 70%),
    linear-gradient(180deg, #090b10, #040506 78%);
  --loader-panel: rgba(18, 13, 9, 0.72);
  --loader-border: rgba(255, 170, 82, 0.16);
  --loader-glow: rgba(255, 136, 18, 0.24);
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
  overflow: hidden;
}

.site-loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: min(54vw, 460px);
  height: min(54vw, 460px);
  background: radial-gradient(circle, rgba(255, 136, 24, 0.18), transparent 68%);
  filter: blur(22px);
  animation: loader-glow 2.8s ease-in-out infinite;
}

.site-loader.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: scale(1.02);
}

.loader-inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 16px;
  place-items: center;
  text-align: center;
  padding: 28px 32px;
}

.loader-ring {
  position: relative;
  width: clamp(160px, 16vw, 200px);
  height: clamp(160px, 16vw, 200px);
  border-radius: 36px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, rgba(30, 20, 14, 0.9), var(--loader-panel));
  border: 1px solid var(--loader-border);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 24px 48px rgba(0, 0, 0, 0.48),
    0 0 36px var(--loader-glow);
}

.loader-ring::before {
  content: '';
  position: absolute;
  inset: 14px;
  border-radius: 28px;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(255, 155, 38, 0.08), rgba(255, 155, 38, 0.02));
  border: 1px solid rgba(255, 177, 78, 0.08);
}

.loader-logo {
  position: relative;
  z-index: 1;
  width: 58%;
  height: 58%;
  object-fit: contain;
  filter:
    drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45))
    drop-shadow(0 0 14px rgba(255, 150, 30, 0.14));
  animation: loader-logo-breathe 2.1s ease-in-out infinite;
  transform-origin: center;
}

.loader-text {
  font-family: var(--font-secondary);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: clamp(12px, 1.2vw, 14px);
  color: var(--loader-text);
  text-shadow: 0 0 16px rgba(255, 140, 22, 0.08);
}

.loader-subtext {
  font-family: var(--font-ternary);
  font-size: clamp(11px, 1vw, 13px);
  color: rgba(248, 248, 255, 0.58);
  letter-spacing: 0.02em;
}

.loader-progress {
  position: relative;
  width: min(220px, 44vw);
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
}

.loader-progress::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 38%;
  border-radius: inherit;
  background: linear-gradient(90deg, rgba(255, 170, 85, 0), rgba(255, 153, 36, 1), rgba(255, 170, 85, 0));
  animation: loader-progress-run 1.45s ease-in-out infinite;
}

@keyframes loader-logo-breathe {
  0%,
  100% {
    transform: scale(0.96);
    opacity: 0.92;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes loader-glow {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(0.96);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.04);
    opacity: 1;
  }
}

@keyframes loader-progress-run {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(320%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-loader::before,
  .loader-ring::before,
  .loader-logo,
  .loader-progress::before {
    animation: none !important;
  }
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
      '  <div class="loader-progress" aria-hidden="true"></div>' +
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
