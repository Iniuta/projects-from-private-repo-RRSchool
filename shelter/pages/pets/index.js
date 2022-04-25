const hamburger = document.querySelector(".hamburger");
const navHamburger = document.querySelector(".nav-320");
// const hamburgerMenuLogo = document.querySelector(".hamburger-menu-logo");
// const flexLogo = document.querySelector(".flex-logo");
const hidden = document.querySelector(".hidden");
// const hamburgerMenuTop = document.querySelector(".hamburger-menu-top");
const hiddenLi = document.querySelectorAll(".ul-320 li");
const body = document.querySelector("body");
const header = document.querySelector(".header-flex");
const logo = document.querySelector(".flex-logo");


hamburger.onclick = () => {
  hamburger.classList.toggle("hamburger-active");
  navHamburger.classList.toggle("hamburger-active");
  // flexLogo.classList.toggle("hamburger-active");
  hidden.classList.toggle("hamburger-active");
  body.classList.toggle("hamburger-active");
  header.classList.toggle("hamburger-active");
  logo.classList.toggle("hamburger-active");
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
    // flexLogo.classList.remove("hamburger-active");
    hidden.classList.remove("hamburger-active");
    body.classList.remove("hamburger-active");
    header.classList.remove("hamburger-active");
    logo.classList.remove("hamburger-active");
}

window.addEventListener("resize", function (event) {
    var newWidth = window.innerWidth;
    if (newWidth > 768) {
        turnOffActive();
    }
  });
