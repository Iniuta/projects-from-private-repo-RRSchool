<<<<<<< HEAD
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

console.log('Вёрстка соответствует макету. Ширина экрана 768px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22.\n75 баллов.');
=======
console.log("Вёрстка валидная +10\nВёрстка семантическая +20\nВ коде странице присутствуют следующие элементы:\n<header>, <main>, <footer> +2\nшесть элементов <section> (по количеству секций) +2\nодин заголовок <h1> +2\nпять заголовков <h2> +2\nодин элемент <nav> +2\nдва списка ul > li > a +2\nдесять кнопок <button> +2\nдва инпута: <input type=\"email\"> и <input type=\"tel\"> +2\nодин элемент <textarea> +2\nтри атрибута placeholder +2\nВёрстка соответствует макету +48\nблок <header> +6\nсекция hero +6\nсекция skills +6\nсекция portfolio +6\nсекция video +6\nсекция price +6\nсекция contacts +6\nблок <footer> +6\nТребования к css + 12\nдля построения сетки используются флексы или гриды +2\nпри уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\nфоновый цвет тянется на всю ширину страницы +2\nиконки добавлены в формате .svg +2\nизображения добавлены в формате .jpg +2\nесть favicon +2\nИнтерактивность, реализуемая через css +20\nплавная прокрутка по якорям +5\nссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\nинтерактивность включает в себя изменение внешнего вида курсора и другие визуальные. +5\nобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\nRESULT: 100");
>>>>>>> 5b20f42be7ff81e33779c6e4bfda3b1caea8d408
