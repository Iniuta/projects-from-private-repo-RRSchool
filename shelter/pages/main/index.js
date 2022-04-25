const hamburger = document.querySelector(".hamburger");
const navHamburger = document.querySelector(".nav-320");
const hamburgerMenuLogo = document.querySelector(".hamburger-menu-logo");
const ul = document.querySelector(".ul-320");
const flexLogo = document.querySelector(".flex-logo");
const hidden = document.querySelector(".hidden");
const hamburgerMenuTop = document.querySelector(".hamburger-menu-top");
const hiddenLi = document.querySelectorAll(".ul-320 li");
const body = document.querySelector("body");

hamburger.onclick = () => {
  hamburger.classList.toggle("hamburger-active");
  navHamburger.classList.toggle("hamburger-active");
  flexLogo.classList.toggle("hamburger-active");
  hidden.classList.toggle("hamburger-active");
  body.classList.toggle("hamburger-active");
};

hidden.onclick = () => {
    turnOffActive();
};

hiddenLi.forEach((li) => {
  li.addEventListener("click", () => {
    turnOffActive();
  });
});

function turnOffActive() {
    hamburger.classList.remove("hamburger-active");
    navHamburger.classList.remove("hamburger-active");
    flexLogo.classList.remove("hamburger-active");
    hidden.classList.remove("hamburger-active");
    body.classList.remove("hamburger-active");
}

window.addEventListener("resize", function (event) {
    var newWidth = window.innerWidth;
    if (newWidth > 768) {
        turnOffActive();
    }
  });