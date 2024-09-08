document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".parent").style.opacity = "0";
    document.querySelector(".parent").style.transition =
      "opacity 1s ease-in-out";
    document.querySelector(".main-content").classList.add("visible");

    setTimeout(function () {
      document.querySelector(".parent").style.display = "none";
    }, 1000); // Matches the transition duration
  }, 4000);
});
