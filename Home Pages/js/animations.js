let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  const isScrollingDown = st > lastScrollTop;
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

  const applyOrRemoveClass = (element, className) => {
    const position = element.getBoundingClientRect();

    // Add class if scrolling down and element is in viewport
    if (position.top < window.innerHeight && position.bottom >= 0) {
      if (isScrollingDown) {
        element.classList.add(className);
      }
    }
  };

  const resetClass = (element, className) => {
    const position = element.getBoundingClientRect();

    // Reset class if element is out of viewport from the bottom
    if (position.top >= window.innerHeight) {
      element.classList.remove(className);
    }
  };

  const elements = [
    ".thumbnail",
    ".arrows",
    ".scroll-element",
    ".scroll-element1",
    ".scroll-element2",
    ".scroll-element3",
    ".scroll-element4",
    ".scroll-element5",
    ".scroll-element6",
    ".scroll-element7",
    ".scroll-element8",
    ".scroll-element9",
    ".scroll-element10",
    ".scroll-element11",
    ".scroll-element12",
    ".scroll-element13",
    ".scroll-element14",
    ".scroll-element15",
    ".scroll-element16",
    ".scroll-element17",
    ".scroll-element18",
    ".scroll-element19",
    ".scroll-element20",
    ".scroll-element21",
    ".scroll-element22",
    ".scroll-element23",
    ".scroll-element24",
  ];

  elements.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      applyOrRemoveClass(element, "visible");
      resetClass(element, "visible");
    }
  });
});

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
