document.addEventListener("DOMContentLoaded", () => {
  const smoothWrapper = document.getElementById("smooth-wrapper");

  const options = {
    root: smoothWrapper,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When element is 50% visible in the viewport
        entry.target.classList.add("aos-animate");
      } else {
        // Optional: Reset animation when leaving viewport
        entry.target.classList.remove("aos-animate");
      }
    });
  }, options);

  document.querySelectorAll("[data-aos]").forEach((element) => {
    observer.observe(element);
  });

  AOS.init({
    duration: 1500,
    easing: "ease-in-out",
    once: false,
    offset: 0,
  });
});