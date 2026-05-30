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

/* Featured projects show more toggle */
const projectsWrap = document.querySelector('#projectsWrap');
const projectToggleButtons = document.querySelectorAll('[data-project-toggle]');

if (projectsWrap && projectToggleButtons.length) {
  const collapsedText = 'View All Projects ➜';
  const expandedText = 'Show Less Projects';

  const syncProjectToggleState = (isExpanded) => {
    projectsWrap.classList.toggle('is-collapsed', !isExpanded);

    projectToggleButtons.forEach(button => {
      button.setAttribute('aria-expanded', String(isExpanded));
      button.textContent = isExpanded ? expandedText : collapsedText;
    });

    if (
      isExpanded &&
      window.ScrollAnimations &&
      typeof window.ScrollAnimations.triggerViewportAnimations === 'function'
    ) {
      requestAnimationFrame(() => {
        window.ScrollAnimations.triggerViewportAnimations({ triggerPoint: 0.9 });
      });
    }
  };

  syncProjectToggleState(false);

  projectToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      syncProjectToggleState(!isExpanded);
    });
  });
}


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

/* Services reveal animation on viewport entry */
const serviceFolder = document.querySelector(".service-folder");
const serviceSheets = Array.from(document.querySelectorAll(".service-sheet"));

if (serviceFolder && serviceSheets.length) {
  const revealServices = () => {
    serviceFolder.classList.add("is-revealed");
  };

  const resetServices = () => {
    serviceFolder.classList.remove("is-revealed");
  };

  const desktopQuery = window.matchMedia("(min-width: 769px)");

  serviceSheets.forEach((sheet) => {
    sheet.dataset.mobileScroll = sheet.getAttribute("data-scroll") || "";
    sheet.dataset.mobileScrollDelay = sheet.getAttribute("data-scroll-delay") || "";
    sheet.dataset.mobileScrollTrigger = sheet.getAttribute("data-scroll-trigger") || "";
  });

  const enableDesktopServices = () => {
    serviceSheets.forEach((sheet) => {
      sheet.removeAttribute("data-scroll");
      sheet.removeAttribute("data-scroll-delay");
      sheet.removeAttribute("data-scroll-trigger");
      sheet.style.opacity = "";
      sheet.style.transform = "";
      sheet.style.transition = "";
      sheet.style.willChange = "";
    });
  };

  const enableMobileServices = () => {
    serviceSheets.forEach((sheet) => {
      if (sheet.dataset.mobileScroll) {
        sheet.setAttribute("data-scroll", sheet.dataset.mobileScroll);
      }
      if (sheet.dataset.mobileScrollDelay) {
        sheet.setAttribute("data-scroll-delay", sheet.dataset.mobileScrollDelay);
      }
      if (sheet.dataset.mobileScrollTrigger) {
        sheet.setAttribute("data-scroll-trigger", sheet.dataset.mobileScrollTrigger);
      }
      sheet.style.opacity = "";
      sheet.style.transform = "";
      sheet.style.transition = "";
      sheet.style.willChange = "";
    });
  };

  const syncServicesReveal = () => {
    if (desktopQuery.matches) {
      enableDesktopServices();
    } else {
      resetServices();
      enableMobileServices();
      if (
        window.ScrollAnimations &&
        typeof window.ScrollAnimations.triggerViewportAnimations === "function"
      ) {
        requestAnimationFrame(() => {
          window.ScrollAnimations.triggerViewportAnimations({ triggerPoint: 0.75 });
        });
      }
      return;
    }

    const rect = serviceFolder.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const triggerLine = viewportHeight * 0.75;

    if (rect.top <= triggerLine && rect.bottom > 0) {
      revealServices();
    } else {
      resetServices();
    }
  };

  if ("IntersectionObserver" in window) {
    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!desktopQuery.matches) return;
        if (entry.isIntersecting) {
          revealServices();
        } else {
          resetServices();
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: "0px 0px -10% 0px"
    });

    servicesObserver.observe(serviceFolder);
  }

  syncServicesReveal();

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", syncServicesReveal);
  } else if (typeof desktopQuery.addListener === "function") {
    desktopQuery.addListener(syncServicesReveal);
  }
}
