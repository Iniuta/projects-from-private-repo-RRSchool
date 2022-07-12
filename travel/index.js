console.log(
    "Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20"
  );





const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".nav-container");
const menuLi = document.querySelectorAll(".menu-li");

function toggleMenu(event, isClosed) {
  if (document.getElementById("hamburger-1").classList.contains("is-active") || isClosed) {
    hamburger.classList.toggle("is-active");
    navList.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  }
}
hamburger.addEventListener("click", (e) => toggleMenu(e, true));
menuLi.forEach((li) => {  li.addEventListener("click", toggleMenu);});

window.addEventListener("resize", function (event) {
  var newWidth = window.innerWidth;
  if (newWidth > 390) {
    hamburger.classList.remove("is-active");
    navList.classList.remove("is-active");
    menu.classList.remove("is-active");
  }
});