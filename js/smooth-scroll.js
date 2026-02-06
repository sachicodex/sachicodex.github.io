/**
 * Smooth Scroll Module
 * 
 * Ultra-smooth scrolling using optimized interpolation and continuous animation
 * 
 * Usage:
 *   - As ES6 module: import { initSmoothScroll } from './smooth-scroll.js';
 *   - As standalone: <script src="smooth-scroll.js"></script>
 */

(function() {
  'use strict';

  let isActive = false;
  let current = 0;
  let target = 0;
  let ease = 0.05;
  let raf = null;
  let isProgrammaticScroll = false;
  let lastScrollTime = 0;

  /**
   * Check if user prefers reduced motion
   */
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Get scroll position
   */
  function getScroll() {
    return window.pageYOffset || document.documentElement.scrollTop || 0;
  }

  /**
   * Set scroll position
   */
  function setScroll(value) {
    isProgrammaticScroll = true;
    lastScrollTime = Date.now();
    window.scrollTo(0, value);
    // Reset flag after animation frame to allow scroll to register
    requestAnimationFrame(() => {
      setTimeout(() => {
        isProgrammaticScroll = false;
      }, 50);
    });
  }

  /**
   * Sync internal state with actual scroll position
   * Call this after external scrolling (anchor links, search, etc.)
   */
  function syncScrollPosition() {
    const actualScroll = getScroll();
    current = actualScroll;
    target = actualScroll;
    isActive = false;
    if (raf) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }

  /**
   * Scroll to a specific Y position
   */
  function scrollToPosition(y, options = {}) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    target = Math.max(0, Math.min(y, max));

    if (options.immediate) {
      current = target;
      setScroll(current);
      isActive = false;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      return;
    }

    start();
  }

  /**
   * Scroll to an element with optional offset
   */
  function scrollToElement(element, offset = 0) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const y = getScroll() + rect.top - offset;
    scrollToPosition(y);
  }

  /**
   * Animation loop
   */
  function update() {
    // Ultra-smooth interpolation
    current += (target - current) * ease;
    
    // Check if close enough
    if (Math.abs(target - current) < 0.1) {
      current = target;
      setScroll(current);
      isActive = false;
      raf = null;
      return;
    }

    setScroll(current);
    raf = requestAnimationFrame(update);
  }

  /**
   * Start animation
   */
  function start() {
    if (!isActive) {
      isActive = true;
      current = getScroll();
      raf = requestAnimationFrame(update);
    }
  }

  /**
   * Handle wheel
   */
  function onWheel(e) {
    if (prefersReducedMotion()) return;

    e.preventDefault();
    
    const delta = e.deltaY;
    const isTrackpad = e.deltaMode === 0 && Math.abs(delta) < 50;
    
    let amount;
    if (isTrackpad) {
      amount = delta * 0.7;
    } else {
      amount = delta > 0 ? 70 : -70;
    }
    
    target += amount;
    target = Math.max(0, Math.min(target, document.documentElement.scrollHeight - window.innerHeight));
    
    start();
  }

  /**
   * Handle keyboard
   */
  function onKeyDown(e) {
    if (prefersReducedMotion()) return;

    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) {
      return;
    }

    const keys = {
      'ArrowUp': -80,
      'ArrowDown': 80,
      'PageUp': -window.innerHeight * 0.8,
      'PageDown': window.innerHeight * 0.8,
      'Home': 0,
      'End': document.documentElement.scrollHeight
    };

    if (e.key in keys) {
      e.preventDefault();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      
      if (e.key === 'Home') {
        target = 0;
      } else if (e.key === 'End') {
        target = max;
      } else {
        target += keys[e.key];
        target = Math.max(0, Math.min(target, max));
      }
      
      start();
    } else if (e.key === ' ' && !e.shiftKey) {
      e.preventDefault();
      target += window.innerHeight * 0.8;
      target = Math.max(0, Math.min(target, document.documentElement.scrollHeight - window.innerHeight));
      start();
    }
  }

  /**
   * Handle scroll events (to detect external scrolling)
   */
  function onScroll() {
    // Only sync if scroll wasn't caused by smooth-scroll itself
    // Check if enough time has passed since our last programmatic scroll
    const timeSinceLastScroll = Date.now() - lastScrollTime;
    if (!isProgrammaticScroll && timeSinceLastScroll > 150) {
      const actualScroll = getScroll();
      // If actual scroll differs significantly from our target, sync
      // This means external scrolling happened (anchor link, search, etc.)
      if (Math.abs(actualScroll - target) > 10) {
        syncScrollPosition();
      }
    }
  }

  /**
   * Initialize
   */
  function initSmoothScroll(options = {}) {
    if (prefersReducedMotion()) return;

    ease = options.ease || 0.05;
    current = getScroll();
    target = current;

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Start continuous loop
    start();
  }

  /**
   * Destroy
   */
  function destroySmoothScroll() {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = null;
    }
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('scroll', onScroll);
    isActive = false;
  }

  // Export
  const exports = {
    initSmoothScroll,
    destroySmoothScroll,
    syncScrollPosition,
    scrollToPosition,
    scrollToElement
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  } else if (typeof define === 'function' && define.amd) {
    define([], () => exports);
  } else {
    window.SmoothScroll = exports;
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initSmoothScroll);
    } else {
      initSmoothScroll();
    }
  }
})();
