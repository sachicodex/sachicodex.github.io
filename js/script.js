// checks scroll position and toggles the class
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

});

/* Active nav link based on section in view */
const sections = Array.from(document.querySelectorAll('section[id], header[id]'));
const NAV_OFFSET = 120;

function updateActiveNav() {
  if (!sections.length || !navLinks.length) return;

  const scrollPos = window.pageYOffset + NAV_OFFSET;
  let currentId = sections[0]?.id || '';

  for (const section of sections) {
    if (section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  }

  const targetHref = `#${currentId}`;
  const matchingLink = Array.from(navLinks).find(
    link => link.getAttribute('href') === targetHref
  );

  if (!matchingLink) {
    return;
  }

  navLinks.forEach(link => {
    const li = link.closest('li');
    if (!li) return;
    const isActive = link === matchingLink;
    li.classList.toggle('active', isActive);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('load', updateActiveNav);

/* Anchor navigation */
const DEFAULT_SCROLL_OFFSET = 100;
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  const hash = link.getAttribute('href');
  if (!hash || hash === '#' || hash.length < 2) return;

  link.addEventListener('click', (e) => {
    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    const offsetAttr = link.getAttribute('data-scroll-offset');
    const offset = Number.isFinite(parseInt(offsetAttr))
      ? parseInt(offsetAttr)
      : DEFAULT_SCROLL_OFFSET;

    if (window.SmoothScroll && typeof window.SmoothScroll.scrollToElement === 'function') {
      window.SmoothScroll.scrollToElement(target, offset);
    } else {
      const top = window.pageYOffset + target.getBoundingClientRect().top - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    if (window.ScrollAnimations && typeof window.ScrollAnimations.triggerViewportAnimations === 'function') {
      setTimeout(() => {
        window.ScrollAnimations.triggerViewportAnimations();
      }, 350);
    }
  });
});

/* Button navigation */
const targetButtons = document.querySelectorAll('[data-scroll-target]');

targetButtons.forEach(button => {
  const selector = button.getAttribute('data-scroll-target');
  if (!selector) return;

  button.addEventListener('click', (e) => {
    const target = document.querySelector(selector);
    if (!target) return;

    e.preventDefault();
    const offsetAttr = button.getAttribute('data-scroll-offset');
    const offset = Number.isFinite(parseInt(offsetAttr))
      ? parseInt(offsetAttr)
      : DEFAULT_SCROLL_OFFSET;

    if (window.SmoothScroll && typeof window.SmoothScroll.scrollToElement === 'function') {
      window.SmoothScroll.scrollToElement(target, offset);
    } else {
      const top = window.pageYOffset + target.getBoundingClientRect().top - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    if (window.ScrollAnimations && typeof window.ScrollAnimations.triggerViewportAnimations === 'function') {
      setTimeout(() => {
        window.ScrollAnimations.triggerViewportAnimations();
      }, 350);
    }
  });
});


/* Journey Show | Hide Option */
const toggleBtn = document.querySelector("#journeyToggle");
const wrap = document.querySelector("#journeyWrap");

if (toggleBtn && wrap) {
  const DURATION = 650;
  const COLLAPSED_HEIGHT = 500;

  const setHeightAutoAfter = () => {
    setTimeout(() => {
      wrap.style.maxHeight = "none";
    }, DURATION);
  };

  const collapse = () => {
    wrap.style.maxHeight = wrap.scrollHeight + "px";
    wrap.offsetHeight;
    wrap.classList.add("is-collapsed");
    wrap.style.maxHeight = `${COLLAPSED_HEIGHT}px`;
    toggleBtn.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  const expand = () => {
    wrap.style.maxHeight = wrap.scrollHeight + "px";
    wrap.offsetHeight;
    wrap.classList.remove("is-collapsed");
    wrap.style.maxHeight = wrap.scrollHeight + "px";

    toggleBtn.classList.add("is-open");
    toggleBtn.setAttribute("aria-expanded", "true");

    setHeightAutoAfter();

    if (window.ScrollAnimations && typeof window.ScrollAnimations.triggerViewportAnimations === "function") {
      requestAnimationFrame(() => {
        window.ScrollAnimations.triggerViewportAnimations({ triggerPoint: 0.9 });
      });
    }
  };

  wrap.classList.add("is-collapsed");
  wrap.style.maxHeight = `${COLLAPSED_HEIGHT}px`;

  toggleBtn.addEventListener("click", () => {
    const isCollapsed = wrap.classList.contains("is-collapsed");
    isCollapsed ? expand() : collapse();
  });
}

/* Email Send with mailto handler */
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("#name")?.value.trim() || "";
    const email = contactForm.querySelector("#usermail")?.value.trim() || "";
    const subject = contactForm.querySelector("#subject")?.value.trim() || "New message";
    const message = contactForm.querySelector("#message")?.value.trim() || "";

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const to = "dev.sachinthalakshan@gmail.com";
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoUrl =
      `mailto:${encodeURIComponent(to)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
}
