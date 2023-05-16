const btn = document.querySelector(".dropdown-menu");
const dropContents = document.getElementById("dropdown");
btn.addEventListener("mouseenter", () => {
  document.querySelector("#dropdown").classList.toggle("show");
});
btn.addEventListener("mouseleave", () => {
  document.querySelector("#dropdown").classList.remove("show");
});

document.addEventListener("DOMContentLoaded", function() {
  var menuIcon = document.querySelector(".menu-icon");
  var navigationMenu = document.querySelector(".navigation-menu");

  menuIcon.addEventListener("click", function() {
    navigationMenu.classList.toggle("active");
  });
});