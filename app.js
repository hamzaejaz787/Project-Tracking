const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-lists li");

burger.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});
