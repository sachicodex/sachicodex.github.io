(function () {
  "use strict";

  let activeMenu = null;
  let bodyScrollLocked = false;

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function createMobileMenuStyles() {
    if (document.getElementById("mobile-menu-styles")) return;

    const style = document.createElement("style");
    style.id = "mobile-menu-styles";
    style.textContent = `
:root {
  --mobile-menu-toggle-background: rgba(255, 255, 255, 0.08);
  --mobile-menu-toggle-box-shadow-color: rgba(0, 0, 0, 0.45);
  --hamburger-span-background: rgba(var(--color-white, 248, 248, 255), 0.95);
  --mobile-menu-overlay-background: rgba(7, 10, 16, 0.62);
  --mobile-menu-background: linear-gradient(
    160deg,
    rgba(16, 21, 32, 0.98),
    rgba(10, 12, 18, 0.96)
  );
  --mobile-menu-box-shadow-color: rgba(0, 0, 0, 0.5);
  --mobile-menu-header-border-color: rgba(255, 255, 255, 0.08);
  --mobile-menu-title-color: rgba(var(--color-white, 248, 248, 255), 0.95);
  --mobile-menu-close-color: rgba(var(--color-white, 248, 248, 255), 0.85);
  --mobile-menu-close-background-hover: rgba(255, 255, 255, 0.12);
  --mobile-menu-nav-a-color: rgba(var(--color-white, 248, 248, 255), 0.85);
  --mobile-menu-nav-a-border-color: rgba(255, 255, 255, 0.08);
  --mobile-menu-nav-a-color-hover: var(--accent, rgb(255, 162, 0));
  --mobile-menu-nav-a-outline-color: var(--accent, rgb(255, 162, 0));
}

.mobile-menu-toggle {
  display: none;
  position: fixed;
  top: 1.2rem;
  right: 1.2rem;
  z-index: 10002;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: var(--mobile-menu-toggle-background);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 14px;
  cursor: pointer;
  padding: 0;
  box-shadow:
    0 16px 32px var(--mobile-menu-toggle-box-shadow-color),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.mobile-menu-toggle:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.2);
}

.mobile-menu-toggle:focus-visible {
  outline: 2px solid var(--mobile-menu-nav-a-outline-color);
  outline-offset: 2px;
}

.hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--hamburger-span-background);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-menu-toggle.active .hamburger span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.mobile-menu-toggle.active .hamburger span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: var(--mobile-menu-overlay-background);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 10001;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-menu-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: min(85vw, 340px);
  height: 100%;
  background: var(--mobile-menu-background);
  z-index: 10002;
  transform: translateX(110%);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.3s ease;
  overflow-y: auto;
  box-shadow: -24px 0 60px var(--mobile-menu-box-shadow-color);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-menu.active {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 1.8rem 1.3rem;
  border-bottom: 1px solid var(--mobile-menu-header-border-color);
}

.mobile-menu-title {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--mobile-menu-title-color);
  margin: 0;
  font-family: var(--font-secondary, "Montserrat", sans-serif);
}

.mobile-menu-close {
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: var(--mobile-menu-close-color);
  transition: background 0.2s ease, color 0.2s ease;
  padding: 0;
}

.mobile-menu-close:hover{
  background: var(--mobile-menu-close-background-hover);
}

.mobile-menu-close svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  margin: 8px;
}

.mobile-menu-content {
  padding: 1.8rem;
}

.mobile-menu .nav-container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.mobile-menu .logo {
  width: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-menu .logo img {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
}

.mobile-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 0;
  padding: 0;
}

.mobile-menu li {
  margin: 0;
}

.mobile-menu a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 0;
  color: var(--mobile-menu-nav-a-color);
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 600;
  font-family: var(--font-secondary, "Montserrat", sans-serif);
  border-bottom: 1px solid var(--mobile-menu-nav-a-border-color);
  transition: color 0.2s ease, transform 0.2s ease;
}

.mobile-menu a::after {
  content: "";
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 0.6;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.mobile-menu a:hover,
.mobile-menu a:focus-visible {
  color: var(--mobile-menu-nav-a-color-hover);
  transform: translateX(4px);
}

.mobile-menu a:hover::after,
.mobile-menu a:focus-visible::after {
  opacity: 1;
  transform: translateX(2px) rotate(-45deg);
}

.mobile-menu a:focus-visible {
  outline: 2px solid var(--mobile-menu-nav-a-outline-color);
  outline-offset: 4px;
}

.mobile-menu li:last-child a {
  border-bottom: none;
}

.mobile-menu .nav-action {
  width: 100%;
}

.mobile-menu .nav-action button{
  width: auto;
  text-align: center;
  padding: 15px 20vw;
  border-radius: 999px;
  background: var(--btn-primary-bg, rgb(255, 255, 255));
  color: var(--btn-primary-text, rgb(10, 15, 31));
  font-weight: 700;
  font-family: var(--font-secondary, "Montserrat", sans-serif);
  letter-spacing: 0.02em;
  box-shadow: var(--shadow-button, 0 2px 8px rgba(0, 0, 0, 0.1));
}

body.mobile-menu-open {
  overflow: hidden;
}

@media (min-width: 769px) {
  .mobile-menu-toggle,
  .mobile-menu-overlay,
  .mobile-menu {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: grid;
    place-items: center;
  }

  .mobile-menu-source {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu,
  .mobile-menu-overlay,
  .mobile-menu-toggle,
  .hamburger span,
  .mobile-menu a {
    transition: none !important;
  }
}
    `;

    const head = document.head || document.documentElement;
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  }

  /**
   * Lock body scroll
   */
  function lockBodyScroll() {
    if (bodyScrollLocked) return;
    bodyScrollLocked = true;
    document.body.style.overflow = "hidden";
    document.body.classList.add("mobile-menu-open");
  }

  /**
   * Unlock body scroll
   */
  function unlockBodyScroll() {
    if (!bodyScrollLocked) return;
    bodyScrollLocked = false;
    document.body.style.overflow = "";
    document.body.classList.remove("mobile-menu-open");
  }

  /**
   * Open mobile menu
   */
  function openMobileMenu() {
    if (activeMenu) {
      const menu = activeMenu.menu;
      const overlay = activeMenu.overlay;
      const toggle = activeMenu.toggle;

      menu.classList.add("active");
      overlay.classList.add("active");
      toggle.classList.add("active");
      lockBodyScroll();

      // Focus first link
      const firstLink = menu.querySelector("a");
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 300);
      }
    }
  }

  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    if (activeMenu) {
      const menu = activeMenu.menu;
      const overlay = activeMenu.overlay;
      const toggle = activeMenu.toggle;

      menu.classList.remove("active");
      overlay.classList.remove("active");
      toggle.classList.remove("active");
      unlockBodyScroll();

      // Return focus to toggle button
      if (toggle) {
        toggle.focus();
      }
    }
  }

  /**
   * Toggle mobile menu
   */
  function toggleMobileMenu() {
    if (activeMenu && activeMenu.menu.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  /**
   * Initialize mobile menu
   */
  function initMobileMenu(options = {}) {
    createMobileMenuStyles();

    // Find or create menu structure
    const menuSelector =
      options.menuSelector || 'nav, .nav, .navigation, [role="navigation"]';
    const nav = document.querySelector(menuSelector);

    if (!nav) {
      console.warn("Mobile menu: No navigation element found");
      return;
    }

    nav.classList.add("mobile-menu-source");

    // Create toggle button
    const toggle = document.createElement("button");
    toggle.className = "mobile-menu-toggle";
    toggle.setAttribute("aria-label", "Toggle mobile menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = `
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;

    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = "mobile-menu-overlay";

    // Create mobile menu container
    const menu = document.createElement("div");
    menu.className = "mobile-menu";
    menu.setAttribute("role", "navigation");
    menu.setAttribute("aria-label", "Mobile navigation");

    // Create menu header with close button
    const menuHeader = document.createElement("div");
    menuHeader.className = "mobile-menu-header";
    menuHeader.innerHTML = `
              <div class="logo">
          <img src="res/img/logo-full.png" alt="Sachicodex Logo" />
        </div>
      <button class="mobile-menu-close" aria-label="Close menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    menu.appendChild(menuHeader);

    // Clone navigation content
    const menuContent = document.createElement("div");
    menuContent.className = "mobile-menu-content";
    const navContent = nav.querySelector(".nav-container");
    if (navContent) {
      menuContent.appendChild(navContent.cloneNode(true));
    } else {
      menuContent.appendChild(nav.cloneNode(true));
    }
    menu.appendChild(menuContent);

    // Close button handler
    const closeButton = menuHeader.querySelector(".mobile-menu-close");
    closeButton.addEventListener("click", () => {
      closeMobileMenu();
      toggle.setAttribute("aria-expanded", "false");
    });

    // Add to body
    document.body.appendChild(toggle);
    document.body.appendChild(overlay);
    document.body.appendChild(menu);

    // Event handlers
    toggle.addEventListener("click", () => {
      toggleMobileMenu();
      toggle.setAttribute("aria-expanded", menu.classList.contains("active"));
    });

    overlay.addEventListener("click", closeMobileMenu);

    // Close on link click
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(closeMobileMenu, 100);
      });
    });

    // ESC key to close
    function handleEsc(e) {
      if (e.key === "Escape" && menu.classList.contains("active")) {
        closeMobileMenu();
        toggle.setAttribute("aria-expanded", "false");
      }
    }
    window.addEventListener("keydown", handleEsc);

    // Close on window resize (if becomes desktop)
    function handleResize() {
      if (window.innerWidth > 768 && menu.classList.contains("active")) {
        closeMobileMenu();
        toggle.setAttribute("aria-expanded", "false");
      }
    }
    window.addEventListener("resize", handleResize);

    // Store references
    activeMenu = {
      menu,
      overlay,
      toggle,
      escHandler: handleEsc,
      resizeHandler: handleResize,
    };
  }

  /**
   * Destroy mobile menu
   */
  function destroyMobileMenu() {
    if (activeMenu) {
      closeMobileMenu();

      if (activeMenu.escHandler) {
        window.removeEventListener("keydown", activeMenu.escHandler);
      }
      if (activeMenu.resizeHandler) {
        window.removeEventListener("resize", activeMenu.resizeHandler);
      }

      if (activeMenu.menu) activeMenu.menu.remove();
      if (activeMenu.overlay) activeMenu.overlay.remove();
      if (activeMenu.toggle) activeMenu.toggle.remove();

      activeMenu = null;
    }
  }

  // Export
  const exports = {
    initMobileMenu,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
    destroyMobileMenu,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = exports;
  } else if (typeof define === "function" && define.amd) {
    define([], () => exports);
  } else {
    window.MobileMenu = exports;

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initMobileMenu);
    } else {
      initMobileMenu();
    }
  }
})();
