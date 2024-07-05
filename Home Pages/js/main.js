// Custom JavaScript function to hide the loader element
function hideLoader() {
  // Get the loader element by its class or ID
  const loader = document.querySelector(".loading-page");
  // Set a timeout to hide the loader after 5 seconds (5000 milliseconds)
  setTimeout(function () {
    loader.style.display = "none";
  }, 5000);
}

// Call the hideLoader function when the page finishes loading
window.onload = hideLoader;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function scrollToTop() {
  return new Promise((resolve) => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      resolve();
    }, 100);
  });
}

scrollToTop().then(() => {
  console.log("Scrolling completed."); // Optional: Log success
});

document.addEventListener(
  "touchmove",
  function (event) {
    event.preventDefault();
  },
  false
);

(function (w, d, s, o, f, js, fjs) {
  w[o] =
    w[o] ||
    function () {
      (w[o].q = w[o].q || []).push(arguments);
    };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
})(window, document, "script", "nw", "./Home Pages/js/chat-bot.js");
nw("init", {
  apiKey: "2ace2d6c-a571-4ec7-9540-b0a2e62e3098",
  serviceBaseUrl: "https://api.norby.io",
  lang: "en",
  languageList: [
    "EN",
    "RU",
    "EE",
    "IT",
    "FR",
    "DE",
    "UA",
    "ES",
    "FI",
    "SV",
    "DA",
    "NO",
    "PL",
    "PT",
    "TR",
    "ZH",
    "JA",
  ],
  mainColor: "#000000",
  popupBotAvatarColor: "#000000",
  multichat: false,
  botName: "Sachintha Lakshan",
  imageTransferEnabled: true,
  side: "right",
  marginSideDesktop: 80,
  marginBottomDesktop: 48,
  marginSideMobile: 16,
  marginBottomMobile: 16,
});

// cursor

// Select the cursor element
const cursor = document.querySelector(".cursor");

// Function to handle mouse movement
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursor.style.transform = "scale(1.2)"; // Slightly increase the size on move
  cursor.style.opacity = "1"; // Ensure cursor is visible
});

// Function to handle mouse down
document.addEventListener("mousedown", () => {
  cursor.style.transform = "scale(0.8)"; // Shrink cursor on click
});

// Function to handle mouse up
document.addEventListener("mouseup", () => {
  cursor.style.transform = "scale(1.2)"; // Restore cursor size on release
});

// List of elements to change cursor color on hover
const hoverElements = document.querySelectorAll(
  "button, a, li, input, textarea, select, .profile, .about-text h5, .fa-brands"
);

// Function to handle mouse enter
hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hovered"); // Add class on hover
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hovered"); // Remove class when not hovering
  });
});

// Function to handle mouse leaving the window
document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0"; // Hide the cursor when it leaves the window
});

// Function to handle mouse entering the window
document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1"; // Show the cursor when it enters the window
});

("use strict");

/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(
  getComputedStyle(slider).getPropertyValue("--slider-items")
);
let totalSlidableItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
};

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
};

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
};

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(
    getComputedStyle(slider).getPropertyValue("--slider-items")
  );
  totalSlidableItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("selection"); // Replace with your element selector

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowTop = window.pageYOffset;
    const windowHeight = window.innerHeight;

    if (
      sectionTop >= windowTop &&
      sectionTop + sectionHeight <= windowTop + windowHeight
    ) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  }
});
