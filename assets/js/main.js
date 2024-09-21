document.body.style.scrollBehavior = "smooth";

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".parent").style.opacity = "0";
    document.querySelector(".parent").style.transition =
      "opacity 1s ease-in-out";
    document.querySelector(".main-content").classList.add("visible");

    setTimeout(function () {
      document.querySelector(".parent").style.display = "none";
      document.body.style.overflow = "auto";
    }, 1000); // Matches the transition duration
  }, 4000);
});

// Youtube Popup

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
