/**
 * Scroll Animations Module
 * 
 * Modern scroll-triggered animations using Intersection Observer API
 * Animations trigger only when elements enter viewport from bottom (scrolling down)
 * 
 * Usage:
 *   - As ES6 module: import { initScrollAnimations } from './scroll-animations.js';
 *   - As standalone: <script src="scroll-animations.js"></script>
 * 
 * Animation Types (28 total):
 *   Basic: fade, slide-up, slide-down, slide-left, slide-right, slide-fade
 *   Scale: scale, zoom-in, zoom-out, fade-scale, stretch, slide-scale
 *   Rotation: rotate, slide-rotate, rotate-in, zoom-rotate, swing, wobble
 *   3D: flip-x, flip-y, flip-3d
 *   Effects: blur, glow, slide-blur
 *   Dynamic: bounce, elastic, typing
 *   Modern: reveal-up, reveal-down, reveal-left, reveal-right, clip-up,
 *           clip-left, blur-in, glow-in, soft-zoom, pop-in, float-up,
 *           drift-left, drift-right, tilt-up, skew-up, flip-in-x, flip-in-y,
 *           rotate-scale, fade-up-sm, fade-up-lg
 * 
 * Attributes:
 *   - data-scroll="animation-type"
 *   - data-scroll-delay="200" (milliseconds)
 *   - data-scroll-duration="600" (milliseconds, default: 600)
 *   - data-scroll-trigger="0.12" (0 = bottom, 0.5 = mid viewport, default: 0.12)
 *     - use "bottom" to trigger exactly at the bottom edge
 */

(function() {
  'use strict';

  let observer = null;
  let animatedElements = new WeakSet();
  let lastScrollY = 0;
  let scrollDirection = 'down';
  let isTouchLike = false;
  let allowScrollUp = false;
  let resetOnExit = true;
  let scrollToTopOnLoad = true;
  let triggerOffset = 0.12;
  let pendingElements = new Set();
  let scrollHandler = null;

  /**
   * Check if user prefers reduced motion
   */
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Get current scroll position in a way that's reliable on mobile
   */
  function getScrollTop() {
    const scrollingElement = document.scrollingElement || document.documentElement || document.body;
    return scrollingElement ? scrollingElement.scrollTop : (window.pageYOffset || window.scrollY || 0);
  }

  /**
   * Get animation styles based on type
   */
  function getAnimationStyles(animationType) {
    const styles = {
      initial: {},
      final: {}
    };

    switch(animationType) {
      case 'fade':
        styles.initial = { opacity: '0' };
        styles.final = { opacity: '1' };
        break;
        
      case 'slide-up':
        styles.initial = { opacity: '0', transform: 'translateY(50px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;
        
      case 'slide-down':
        styles.initial = { opacity: '0', transform: 'translateY(-50px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;
        
      case 'slide-left':
        styles.initial = { opacity: '0', transform: 'translateX(50px)' };
        styles.final = { opacity: '1', transform: 'translateX(0)' };
        break;
        
      case 'slide-right':
        styles.initial = { opacity: '0', transform: 'translateX(-50px)' };
        styles.final = { opacity: '1', transform: 'translateX(0)' };
        break;
        
      case 'scale':
        styles.initial = { opacity: '0', transform: 'scale(0.8)' };
        styles.final = { opacity: '1', transform: 'scale(1)' };
        break;
        
      case 'rotate':
        styles.initial = { opacity: '0', transform: 'rotate(12deg) scale(0.85)' };
        styles.final = { opacity: '1', transform: 'rotate(0deg) scale(1)' };
        break;
        
      case 'blur':
        styles.initial = { opacity: '0', filter: 'blur(8px)' };
        styles.final = { opacity: '1', filter: 'blur(0)' };
        break;
        
      case 'flip-x':
        styles.initial = { opacity: '0', transform: 'perspective(1000px) rotateX(90deg)' };
        styles.final = { opacity: '1', transform: 'perspective(1000px) rotateX(0deg)' };
        break;
        
      case 'flip-y':
        styles.initial = { opacity: '0', transform: 'perspective(1000px) rotateY(90deg)' };
        styles.final = { opacity: '1', transform: 'perspective(1000px) rotateY(0deg)' };
        break;
        
      case 'bounce':
        styles.initial = { opacity: '0', transform: 'translateY(60px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;
        
      case 'elastic':
        styles.initial = { opacity: '0', transform: 'scale(0.6)' };
        styles.final = { opacity: '1', transform: 'scale(1)' };
        break;
        
      case 'zoom-in':
        styles.initial = { opacity: '0', transform: 'scale(0.6)' };
        styles.final = { opacity: '1', transform: 'scale(1)' };
        break;
        
      case 'zoom-out':
        styles.initial = { opacity: '0', transform: 'scale(1.3)' };
        styles.final = { opacity: '1', transform: 'scale(1)' };
        break;
        
      case 'typing':
        styles.initial = { opacity: '0', width: '0', overflow: 'hidden' };
        styles.final = { opacity: '1', width: 'auto', overflow: 'visible' };
        break;
        
      case 'slide-rotate':
        styles.initial = { opacity: '0', transform: 'translateY(50px) rotate(-10deg)' };
        styles.final = { opacity: '1', transform: 'translateY(0) rotate(0deg)' };
        break;
        
      case 'flip-3d':
        styles.initial = { opacity: '0', transform: 'perspective(1000px) rotateX(90deg) rotateY(90deg)' };
        styles.final = { opacity: '1', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' };
        break;
        
      case 'stretch':
        styles.initial = { opacity: '0', transform: 'scaleX(0) scaleY(0.8)' };
        styles.final = { opacity: '1', transform: 'scaleX(1) scaleY(1)' };
        break;
        
      case 'swing':
        styles.initial = { opacity: '0', transform: 'translateY(50px) rotate(-15deg)' };
        styles.final = { opacity: '1', transform: 'translateY(0) rotate(0deg)' };
        break;
        
      case 'wobble':
        styles.initial = { opacity: '0', transform: 'translateY(30px) rotate(-5deg)' };
        styles.final = { opacity: '1', transform: 'translateY(0) rotate(0deg)' };
        break;
        
      case 'glow':
        styles.initial = { opacity: '0', filter: 'blur(10px) brightness(0.5)' };
        styles.final = { opacity: '1', filter: 'blur(0) brightness(1)' };
        break;
        
      case 'slide-scale':
        styles.initial = { opacity: '0', transform: 'translateY(40px) scale(0.7)' };
        styles.final = { opacity: '1', transform: 'translateY(0) scale(1)' };
        break;
        
      case 'rotate-in':
        styles.initial = { opacity: '0', transform: 'rotate(-180deg) scale(0.5)' };
        styles.final = { opacity: '1', transform: 'rotate(0deg) scale(1)' };
        break;
        
      case 'slide-blur':
        styles.initial = { opacity: '0', transform: 'translateY(40px)', filter: 'blur(10px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' };
        break;
        
      case 'zoom-rotate':
        styles.initial = { opacity: '0', transform: 'scale(0.5) rotate(45deg)' };
        styles.final = { opacity: '1', transform: 'scale(1) rotate(0deg)' };
        break;
        
      case 'fade-scale':
        styles.initial = { opacity: '0', transform: 'scale(0.9)' };
        styles.final = { opacity: '1', transform: 'scale(1)' };
        break;
        
      case 'slide-fade':
        styles.initial = { opacity: '0', transform: 'translateY(30px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;

      // Modern extras
      case 'reveal-up':
        styles.initial = { opacity: '0', transform: 'translateY(24px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;

      case 'reveal-down':
        styles.initial = { opacity: '0', transform: 'translateY(-24px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;

      case 'reveal-left':
        styles.initial = { opacity: '0', transform: 'translateX(24px)' };
        styles.final = { opacity: '1', transform: 'translateX(0)' };
        break;

      case 'reveal-right':
        styles.initial = { opacity: '0', transform: 'translateX(-24px)' };
        styles.final = { opacity: '1', transform: 'translateX(0)' };
        break;

      case 'clip-up':
        styles.initial = { opacity: '0', clipPath: 'inset(100% 0 0 0)' };
        styles.final = { opacity: '1', clipPath: 'inset(0 0 0 0)' };
        break;

      case 'clip-left':
        styles.initial = { opacity: '0', clipPath: 'inset(0 0 0 100%)' };
        styles.final = { opacity: '1', clipPath: 'inset(0 0 0 0)' };
        break;

      case 'blur-in':
        styles.initial = { opacity: '0', filter: 'blur(12px)' };
        styles.final = { opacity: '1', filter: 'blur(0)' };
        break;

      case 'glow-in':
        styles.initial = { opacity: '0', filter: 'blur(8px) brightness(1.2)' };
        styles.final = { opacity: '1', filter: 'blur(0) brightness(1)' };
        break;

      case 'soft-zoom':
        styles.initial = { opacity: '0', transform: 'scale(0.95)' };
        styles.final = { opacity: '1', transform: 'scale(1)' };
        break;

      case 'pop-in':
        styles.initial = { opacity: '0', transform: 'scale(0.85)' };
        styles.final = { opacity: '1', transform: 'scale(1)' };
        break;

      case 'float-up':
        styles.initial = { opacity: '0', transform: 'translateY(18px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;

      case 'drift-left':
        styles.initial = { opacity: '0', transform: 'translateX(18px)' };
        styles.final = { opacity: '1', transform: 'translateX(0)' };
        break;

      case 'drift-right':
        styles.initial = { opacity: '0', transform: 'translateX(-18px)' };
        styles.final = { opacity: '1', transform: 'translateX(0)' };
        break;

      case 'tilt-up':
        styles.initial = { opacity: '0', transform: 'translateY(20px) rotate(-3deg)' };
        styles.final = { opacity: '1', transform: 'translateY(0) rotate(0)' };
        break;

      case 'skew-up':
        styles.initial = { opacity: '0', transform: 'translateY(22px) skewY(-4deg)' };
        styles.final = { opacity: '1', transform: 'translateY(0) skewY(0)' };
        break;

      case 'flip-in-x':
        styles.initial = { opacity: '0', transform: 'perspective(1000px) rotateX(80deg)' };
        styles.final = { opacity: '1', transform: 'perspective(1000px) rotateX(0)' };
        break;

      case 'flip-in-y':
        styles.initial = { opacity: '0', transform: 'perspective(1000px) rotateY(80deg)' };
        styles.final = { opacity: '1', transform: 'perspective(1000px) rotateY(0)' };
        break;

      case 'rotate-scale':
        styles.initial = { opacity: '0', transform: 'rotate(-8deg) scale(0.92)' };
        styles.final = { opacity: '1', transform: 'rotate(0) scale(1)' };
        break;

      case 'fade-up-sm':
        styles.initial = { opacity: '0', transform: 'translateY(12px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;

      case 'fade-up-lg':
        styles.initial = { opacity: '0', transform: 'translateY(40px)' };
        styles.final = { opacity: '1', transform: 'translateY(0)' };
        break;
        
      default:
        styles.initial = { opacity: '0' };
        styles.final = { opacity: '1' };
    }

    return styles;
  }

  /**
   * Apply styles to element
   */
  function applyStyles(element, styles) {
    Object.keys(styles).forEach(prop => {
      element.style[prop] = styles[prop];
    });
  }

  /**
   * Get per-element trigger offset (0 = bottom, 0.5 = half viewport)
   */
  function getElementTriggerOffset(element) {
    const raw = element.getAttribute('data-scroll-trigger');
    if (raw === null || raw === '') return triggerOffset;
    if (raw === 'bottom') return 0;
    const parsed = parseFloat(raw);
    if (!Number.isFinite(parsed)) return triggerOffset;
    return Math.max(0, Math.min(0.5, parsed));
  }

  function passesTriggerLine(element, rect, viewportHeight) {
    const elementTriggerOffset = getElementTriggerOffset(element);
    const triggerLine = viewportHeight * (1 - elementTriggerOffset);
    return rect.top < triggerLine && rect.bottom > 0;
  }

  function checkPendingElements() {
    if (!pendingElements.size) return;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    pendingElements.forEach(element => {
      if (animatedElements.has(element)) {
        pendingElements.delete(element);
        return;
      }
      const rect = element.getBoundingClientRect();
      if (passesTriggerLine(element, rect, viewportHeight)) {
        const animationType = element.getAttribute('data-scroll') || 'fade';
        const delay = parseInt(element.getAttribute('data-scroll-delay')) || 0;
        const duration = parseInt(element.getAttribute('data-scroll-duration')) || 600;
        animateElement(element, animationType, delay, duration);
        pendingElements.delete(element);
      }
    });
  }

  /**
   * Animate element
   */
  function animateElement(element, animationType, delay, duration) {
    // Skip if already animated
    if (animatedElements.has(element)) {
      return;
    }

    // Special handling for typing animation
    if (animationType === 'typing') {
      // Cache original HTML so we can reset and retype later
      if (!element.dataset.typingOriginalHtml) {
        element.dataset.typingOriginalHtml = element.innerHTML;
      }
      // Get original text content, preserving structure
      const originalHTML = element.innerHTML;
      const originalText = element.textContent || element.innerText;
      
      // Clear content but preserve element structure
      element.innerHTML = '';
      element.style.opacity = '1';
      element.style.width = 'auto';
      element.style.overflow = 'visible';
      element.style.whiteSpace = 'normal'; // Allow text wrapping
      element.style.wordWrap = 'break-word';
      element.style.overflowWrap = 'break-word';
      
      // Create cursor element
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      cursor.textContent = '|';
      cursor.style.marginLeft = '2px';
      cursor.style.animation = 'blink 1s infinite';
      cursor.style.opacity = '1';
      
      // Add cursor blink animation if not exists
      if (!document.getElementById('typing-cursor-style')) {
        const style = document.createElement('style');
        style.id = 'typing-cursor-style';
        style.textContent = `
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }
      
      let charIndex = 0;
      const typingSpeed = 50; // milliseconds per character
      
      function typeChar() {
        if (charIndex < originalText.length) {
          const char = originalText.charAt(charIndex);
          
          // Handle different character types
          if (char === '\n') {
            // Line break
            element.appendChild(document.createElement('br'));
            element.appendChild(cursor);
          } else if (char === ' ') {
            // Space - preserve it
            element.appendChild(document.createTextNode(' '));
            element.appendChild(cursor);
          } else {
            // Regular character
            const textNode = document.createTextNode(char);
            element.appendChild(textNode);
            element.appendChild(cursor);
          }
          
          charIndex++;
          setTimeout(typeChar, typingSpeed);
        } else {
          // Remove cursor after typing completes
          setTimeout(() => {
            if (cursor.parentNode) {
              cursor.remove();
            }
            animatedElements.add(element);
          }, 500);
        }
      }
      
      const startTyping = () => {
        setTimeout(typeChar, delay);
      };
      
      requestAnimationFrame(() => {
        requestAnimationFrame(startTyping);
      });
      return;
    }

    const styles = getAnimationStyles(animationType);
    
    // Set initial state
    applyStyles(element, styles.initial);
    
    // Set transition properties
    const transitionProps = [];
    if (styles.initial.opacity !== undefined) transitionProps.push('opacity');
    if (styles.initial.transform !== undefined) transitionProps.push('transform');
    if (styles.initial.filter !== undefined) transitionProps.push('filter');
    if (styles.initial.width !== undefined) transitionProps.push('width');
    
    element.style.transition = transitionProps.map(prop => 
      `${prop} ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
    ).join(', ');
    
    element.style.willChange = transitionProps.join(', ');

    // Apply animation with delay
    const applyFinalStyles = () => {
      applyStyles(element, styles.final);
      animatedElements.add(element);
    };

    if (delay > 0) {
      setTimeout(applyFinalStyles, delay);
    } else {
      // Use requestAnimationFrame for smooth start
      requestAnimationFrame(() => {
        requestAnimationFrame(applyFinalStyles);
      });
    }
  }

  /**
   * Reset element so it can animate again
   */
  function resetElement(element, animationType) {
    if (animationType === 'typing' && element.dataset.typingOriginalHtml) {
      element.innerHTML = element.dataset.typingOriginalHtml;
    }

    const styles = getAnimationStyles(animationType);
    applyStyles(element, styles.initial);
    element.style.willChange = 'opacity, transform, filter';
  }

  /**
   * Track scroll direction
   */
  function updateScrollDirection() {
    const currentScrollY = getScrollTop();
    scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = currentScrollY;
  }

  /**
   * Intersection Observer callback
   */
  function handleIntersection(entries) {
    // Update scroll direction
    updateScrollDirection();
    
    entries.forEach(entry => {
      const element = entry.target;
      
      // Animate when element enters viewport from any direction
      if (entry.isIntersecting && !animatedElements.has(element)) {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const rect = entry.boundingClientRect;
        if (passesTriggerLine(element, rect, viewportHeight)) {
          const animationType = element.getAttribute('data-scroll') || 'fade';
          const delay = parseInt(element.getAttribute('data-scroll-delay')) || 0;
          const duration = parseInt(element.getAttribute('data-scroll-duration')) || 600;
          
          animateElement(element, animationType, delay, duration);
        } else {
          pendingElements.add(element);
        }
      } else if (!entry.isIntersecting && resetOnExit && animatedElements.has(element)) {
        // Reset when element leaves viewport so it can animate again
        const animationType = element.getAttribute('data-scroll') || 'fade';
        resetElement(element, animationType);
        animatedElements.delete(element);
        pendingElements.delete(element);
      } else if (!entry.isIntersecting) {
        pendingElements.delete(element);
      }
    });
  }

  /**
   * Initialize scroll animations
   */
  function initScrollAnimations(options = {}) {
    if (prefersReducedMotion()) {
      return;
    }

    triggerOffset = typeof options.triggerOffset === 'number'
      ? Math.max(0, Math.min(0.5, options.triggerOffset))
      : 0.12; // 12% from bottom before triggering

    scrollToTopOnLoad = options.scrollToTopOnLoad !== false;

    if (scrollToTopOnLoad) {
      // Prevent browser from restoring scroll position on refresh
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      // Jump to top before measuring/animating
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    // Touch-like devices often trigger IO late; allow more lenient triggering
    isTouchLike = window.matchMedia
      ? window.matchMedia('(hover: none), (pointer: coarse)').matches
      : false;

    allowScrollUp = options.allowScrollUp === true;
    resetOnExit = options.resetOnExit !== false;

    // Initialize scroll tracking
    lastScrollY = getScrollTop();
    scrollDirection = 'down';

    // Default options
    const config = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: [0, 0.01, 0.05]
    };

    // Merge with user options
    Object.assign(config, options);

    // Create Intersection Observer or fallback
    if (!('IntersectionObserver' in window)) {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach(element => {
        const animationType = element.getAttribute('data-scroll') || 'fade';
        const delay = parseInt(element.getAttribute('data-scroll-delay')) || 0;
        const duration = parseInt(element.getAttribute('data-scroll-duration')) || 600;
        animateElement(element, animationType, delay, duration);
      });
      return;
    }

    observer = new IntersectionObserver(handleIntersection, config);

    // Find all elements with data-scroll attribute
    const elements = document.querySelectorAll('[data-scroll]');
    
    // Set initial states and observe
    elements.forEach(element => {
      const animationType = element.getAttribute('data-scroll') || 'fade';
      const styles = getAnimationStyles(animationType);
      
      // Set initial hidden state
      applyStyles(element, styles.initial);
      
      // Special handling for typing animation
      if (animationType === 'typing') {
        if (!element.dataset.typingOriginalHtml) {
          element.dataset.typingOriginalHtml = element.innerHTML;
        }
        element.style.whiteSpace = 'normal'; // Allow wrapping
        element.style.wordWrap = 'break-word';
        element.style.overflowWrap = 'break-word';
        element.style.overflow = 'visible';
      }
      
      element.style.willChange = 'opacity, transform, filter';
      
      // Check if element is already in viewport on page load
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInViewport = rect.top < viewportHeight && rect.bottom > 0;
      
      if (isInViewport) {
        if (passesTriggerLine(element, rect, viewportHeight)) {
          // Element is already visible - animate it immediately
          const delay = parseInt(element.getAttribute('data-scroll-delay')) || 0;
          const duration = parseInt(element.getAttribute('data-scroll-duration')) || 600;
          animateElement(element, animationType, delay, duration);
        } else {
          pendingElements.add(element);
        }
      }
      
      // Observe element for future scroll events
      observer.observe(element);
    });

    // Track scroll direction and check pending elements on scroll
    const onScroll = () => {
      updateScrollDirection();
      checkPendingElements();
    };
    scrollHandler = onScroll;
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', checkPendingElements, { passive: true });
  }

  /**
   * Trigger animations for elements currently in viewport
   * Useful after auto-scrolling (anchor links, search results)
   * Elements above viewport appear immediately without animation
   */
  function triggerViewportAnimations() {
    if (prefersReducedMotion()) return;
    
    // Update scroll position tracking
    const currentScroll = getScrollTop();
    // Always set to down when triggering manually (after auto-scroll)
    scrollDirection = 'down';
    lastScrollY = currentScroll;
    
    // Get all elements with data-scroll attribute
    const elements = document.querySelectorAll('[data-scroll]');
    const viewportTop = 0;
    const viewportBottom = window.innerHeight;
    
    elements.forEach(element => {
      // Skip if already animated
      if (animatedElements.has(element)) return;
      
      const rect = element.getBoundingClientRect();
      const elementTriggerOffset = getElementTriggerOffset(element);
      const animationType = element.getAttribute('data-scroll') || 'fade';
      const styles = getAnimationStyles(animationType);
      
      // Check element position relative to viewport
      const isAboveViewport = rect.bottom < viewportTop; // Element is completely above viewport
      const triggerLine = viewportBottom * (1 - elementTriggerOffset);
      const isInViewport = rect.top < triggerLine && rect.bottom > viewportTop; // Element is in or partially in viewport
      const isBelowViewport = rect.top > viewportBottom; // Element is completely below viewport
      
      if (isAboveViewport) {
        // Element is above viewport - show it immediately without animation
        applyStyles(element, styles.final);
        animatedElements.add(element);
        // Remove any transition to make it instant
        element.style.transition = 'none';
        // Reset transition after a frame
        requestAnimationFrame(() => {
          element.style.transition = '';
        });
      } else if (isInViewport) {
        // Element is in viewport - animate it
        const visibleHeight = Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, viewportTop);
        const isVisible = visibleHeight > 30;
        
        if (isVisible) {
          const delay = parseInt(element.getAttribute('data-scroll-delay')) || 0;
          const duration = parseInt(element.getAttribute('data-scroll-duration')) || 600;
          
          // Make sure element has initial styles applied before animating
          applyStyles(element, styles.initial);
          
          // Small delay to ensure initial styles are applied before animation
          requestAnimationFrame(() => {
            if (!animatedElements.has(element)) {
              animateElement(element, animationType, delay, duration);
            }
          });
        }
      }
      // Elements below viewport remain in initial state (will animate when scrolled to)
    });
  }

  /**
   * Refresh animations (for dynamically added content)
   */
  function refreshAnimations() {
    if (observer) {
      observer.disconnect();
    }
    
    animatedElements = new WeakSet();
    pendingElements.clear();
    initScrollAnimations();
  }

  /**
   * Destroy animations
   */
  function destroyScrollAnimations() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler = null;
    }
    window.removeEventListener('resize', checkPendingElements);
    animatedElements = new WeakSet();
    pendingElements.clear();
  }

  // Export
  const exports = {
    initScrollAnimations,
    refreshAnimations,
    triggerViewportAnimations,
    destroyScrollAnimations
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  } else if (typeof define === 'function' && define.amd) {
    define([], () => exports);
  } else {
    window.ScrollAnimations = exports;
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
      initScrollAnimations();
    }
  }
})();
