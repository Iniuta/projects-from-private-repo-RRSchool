const lang1Obj = {
    en: {
        nightingale: "Nightingale",
        ousel: "Ousel",
        robin: "Robin",
        skylark: "Skylark",
        warbler: "Warbler",
    },
    ru: {
        nightingale: "Соловей",
        ousel: "Дрозд",
        robin: "Малиновка",
        skylark: "Жаворонок",
        warbler: "Славка",
    },
};

const langEn = document.querySelector(".icon-en")
const langRu = document.querySelector(".icon-ru")

langEn.onclick = () => {
    translate("en");
};

langRu.onclick = () => {
    translate("ru");
};

function translate(language) {
    if(language === "en") {
        document.querySelectorAll("[data-lang1]").forEach((e) => {
            e.textContent = lang1Obj.en[e.getAttribute("data-lang1")];
        })
        langEn.classList.add("active");
        langRu.classList.remove("active");
        document.querySelector(".flex-ul").classList.remove("ru");
    } else {
        document.querySelectorAll("[data-lang1]").forEach((e) => {
            e.textContent = lang1Obj.ru[e.getAttribute("data-lang1")];
        })
        langEn.classList.remove("active");
        langRu.classList.add("active");
        document.querySelector(".flex-ul").classList.add("ru");
    }
}

const backgroundImages = document.querySelector('.flex-main');
const flexHeader = document.querySelector('.flex-header');
const iconLang = document.querySelectorAll('.icon-lang');
const buttonBirds = document.querySelectorAll('.button-birds');
const btnActive = document.querySelectorAll('.btn-active')

function changeImage(event) {
    if(event.target.classList.contains("button-birds")) {
      const birdName = event.target.getAttribute("data-birdName");
      backgroundImages.style.backgroundImage=`url(img/${birdName}.jpg)`;
      btnActive.forEach(e => e.classList.remove('btn-is-active'));
      event.target.classList.add('btn-is-active');
    }
}

flexHeader.addEventListener("click", (event) => changeImage(event));