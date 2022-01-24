const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const langs = document.querySelector('.header-lang');
const menu = document.querySelector('.flex-menu');

const menuLis = document.querySelectorAll('.menu-li');


function toggleMenu() {
  hamburger.classList.toggle('is-active');
  navList.classList.toggle('is-active');
  langs.classList.toggle('is-active');
  menu.classList.toggle('is-active');
}
hamburger.addEventListener('click', toggleMenu);
menuLis.forEach(li => li.addEventListener('click', toggleMenu))


window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    if(newWidth > 768) {
        hamburger.classList.remove('is-active');
        navList.classList.remove('is-active');
        langs.classList.remove('is-active');
        menu.classList.remove('is-active');
    }
});