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
