const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
    email: "E-mail",
    phone: "Phone",
    message: "Message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
    email: "Мэйл",
    phone: "Номер телефона",
    message: "Сообщение",
  },
};

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const langs = document.querySelector(".header-lang");
const menu = document.querySelector(".flex-menu");

const menuLis = document.querySelectorAll(".menu-li");

function toggleMenu(event, isClosed) {
  if (document.getElementById("hamburger-1").classList.contains("is-active") || isClosed) {
    hamburger.classList.toggle("is-active");
    navList.classList.toggle("is-active");
    langs.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    buttonSun.classList.toggle("is-active");
  }
}
hamburger.addEventListener("click", (e) => toggleMenu(e, true));
menuLis.forEach((li) => {  li.addEventListener("click", toggleMenu);});

window.addEventListener("resize", function (event) {
  var newWidth = window.innerWidth;
  if (newWidth > 768) {
    hamburger.classList.remove("is-active");
    navList.classList.remove("is-active");
    langs.classList.remove("is-active");
    menu.classList.remove("is-active");
    buttonSun.classList.remove("is-active");
  }
});

console.log(
  "Смена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25"
);

const portfolioImages = document.querySelectorAll(".portfolio-image");
const flexItemSeasons = document.querySelector(".flex-item-seasons");
const buttonSeason = document.querySelectorAll(".button-seasons");

function changeImage(event) {
  if (event.target.classList.contains("btn-portfolio")) {
    const dataSeason = event.target.getAttribute("data-season");
    portfolioImages.forEach(
      (img, index) => (img.src = `./assets/img/${dataSeason}/${index + 1}.jpg`)
    );
    buttonSeason.forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
  }
}

flexItemSeasons.addEventListener("click", (event) => changeImage(event));

const lightTheme = document.querySelectorAll(".changeTheme");
const buttonSun = document.querySelector("#buttonSun");

buttonSun.onclick = () => {
  lightTheme.forEach((e) => {
    e.classList.toggle("light-theme");
  });
};

const langEn = document.querySelector(".icon-en");
const langRu = document.querySelector(".icon-ru");

langEn.onclick = () => {
  translate("en");
};

langRu.onclick = () => {
  translate("ru");
};

function translate(language) {
  if (language === "en") {
    document.querySelectorAll("[data-i18]").forEach((e) => {
      e.textContent = i18Obj.en[e.getAttribute("data-i18")];
      if (e.placeholder) {
        e.placeholder = i18Obj.en[e.getAttribute("data-i18")];
      }
    });
    langEn.classList.add("active");
    langRu.classList.remove("active");
    document.querySelector(".nav-list").classList.remove("ru");
  } else {
    document.querySelectorAll("[data-i18]").forEach((e) => {
      e.textContent = i18Obj.ru[e.getAttribute("data-i18")];
      if (e.placeholder) {
        e.placeholder = i18Obj.ru[e.getAttribute("data-i18")];
      }
    });
    langEn.classList.remove("active");
    langRu.classList.add("active");
    document.querySelector(".nav-list").classList.add("ru");
  }
}
