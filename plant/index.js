
let navMenuList = document.querySelector('.header__navigation');
let navList = document.querySelector('.navigation');
let menuLi = document.querySelectorAll('.menu-li');
let hamburger = document.querySelector('.hamburger');
let line = document.querySelectorAll('.hamburger__line');






//FUNCTION BURGER-MENU//

function toggleMenu(event, isClosed) {
    if (document.getElementById('hamburger-active').classList.contains('is-active') || isClosed) {
        navList.classList.toggle('is-active');
        line.forEach( e => e.classList.toggle('is-active'));
        navMenuList.classList.toggle('is-active');
        menuLi.forEach( e => e.classList.toggle('is-active'));
        hamburger.classList.toggle('is-active');
    }
}

hamburger.addEventListener("click", (e) => toggleMenu(e, true));
menuLi.forEach((e) => {e.addEventListener('click', e => toggleMenu(e, true));})