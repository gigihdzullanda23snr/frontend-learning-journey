// navbar shadow
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 10);
});

// mobile menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
});
