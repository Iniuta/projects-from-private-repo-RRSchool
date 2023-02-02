
let navMenuList = document.querySelector('.header__navigation');
let navList = document.querySelector('.navigation');
let menuLi = document.querySelectorAll('.menu-li');
let hamburger = document.querySelector('.hamburger');
let line = document.querySelectorAll('.hamburger__line');

let serviceButtons = document.querySelector('.service__buttons')
let btnLawn = document.querySelector('.button-lawn');
let btnGardens = document.querySelector('.button-gardens');
let btnPlanting = document.querySelector('.button-planting');

let blurLawnCards = document.querySelectorAll('.lawn-care');
let blurGardenCards = document.querySelectorAll('.garden-care');
let blurPlantingCards = document.querySelectorAll('.planting');

let accordionButtons = document.querySelectorAll('.accordion__input');
let accordionContent = document.querySelectorAll('.accordion__content-wrap');
let btnBasic = document.querySelector('.btn-basic');
let btnStandard = document.querySelector('.btn-standard');
let btnProcare = document.querySelector('.btn-procare');
let contentBasic = document.querySelector('.basic');
let contentStandard = document.querySelector('.standard');
let contentProcare = document.querySelector('.procare');
let accordion = document.querySelector('.accordion');






//1-FUNCTION BURGER-MENU//

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




//2-FUNCTION SWITCH-BUTTONS-CARDS//

serviceButtons.addEventListener("click", (event) => {
    const elem = event.target;
    if(!event.target.classList.contains('is-active') && Array.from(serviceButtons.children).filter(b => b.classList.contains('is-active')).length === 2) return;

    if(elem.classList.contains('buttons')){
        if (elem.classList.contains('button-lawn')) {
            btnLawn.classList.toggle('is-active');

            if(btnLawn.classList.contains('is-active')) {
                blurLawnCards.forEach((e) => e.classList.remove('is-active'));
            } else {
                blurLawnCards.forEach((e) => e.classList.add('is-active'));
            }

            if(!btnGardens.classList.contains('is-active')){
                blurGardenCards.forEach((e) => e.classList.add('is-active'));
            }
            if(!btnPlanting.classList.contains('is-active')){
                blurPlantingCards.forEach((e) => e.classList.add('is-active'));
            }
        }else if(elem.classList.contains('button-gardens')){
            btnGardens.classList.toggle('is-active');

            if(btnGardens.classList.contains('is-active')) {
                blurGardenCards.forEach((e) => e.classList.remove('is-active'));
            } else {
                blurGardenCards.forEach((e) => e.classList.add('is-active'));
            }
        
            if(!btnLawn.classList.contains('is-active')){
                blurLawnCards.forEach((e) => e.classList.add('is-active'));
            }
            if(!btnPlanting.classList.contains('is-active')){
                blurPlantingCards.forEach((e) => e.classList.add('is-active'));
            }
        }else if(elem.classList.contains('button-planting')){   
            btnPlanting.classList.toggle('is-active');
            
            if(btnPlanting.classList.contains('is-active')) {
                blurPlantingCards.forEach((e) => e.classList.remove('is-active'));
            } else {
                blurPlantingCards.forEach((e) => e.classList.add('is-active'));
            }

            if(!btnLawn.classList.contains('is-active')){
                blurLawnCards.forEach((e) => e.classList.add('is-active'));
            }
            if(!btnGardens.classList.contains('is-active')){
                blurGardenCards.forEach((e) => e.classList.add('is-active'));
            }
        }
    }
    if(!btnGardens.classList.contains('is-active') && !btnLawn.classList.contains('is-active') && !btnPlanting.classList.contains('is-active')){
        blurPlantingCards.forEach((e) => e.classList.remove('is-active'));
        blurGardenCards.forEach((e) => e.classList.remove('is-active'));
        blurLawnCards.forEach((e) => e.classList.remove('is-active'));
    }
  });



  //3-FUNCTION ACCORDION//
    
        accordionButtons.forEach((btns) => btns.onclick = function(event) {
            if(event.target.classList.contains('btn-basic')){
                btnBasic.classList.toggle('is-active');
                contentBasic.classList.toggle('is-active');
                // accordion.classList.toggle('is-active');
                contentStandard.classList.remove('is-active');
                contentProcare.classList.remove('is-active');
                btnProcare.classList.remove('is-active');
                btnStandard.classList.remove('is-active');
            }else if(event.target.classList.contains('btn-standard')){
                btnStandard.classList.toggle('is-active');
                contentStandard.classList.toggle('is-active');
                // accordion.classList.toggle('is-active');
                contentBasic.classList.remove('is-active');
                contentProcare.classList.remove('is-active');
                btnBasic.classList.remove('is-active');
                btnProcare.classList.remove('is-active');
            }else if(event.target.classList.contains('btn-procare')){
                btnProcare.classList.toggle('is-active');
                contentProcare.classList.toggle('is-active');
                // accordion.classList.toggle('is-active');
                contentBasic.classList.remove('is-active');
                contentStandard.classList.remove('is-active');
                btnBasic.classList.remove('is-active');
                btnStandard.classList.remove('is-active');
            }
    
            if (!btns.classList.contains('is-active')) {
                accordion.style.height = null;
            } else {
                accordion.style.height = accordion.scrollHeight + "px";
                console.log(accordion.style.height);
        }
    });
    



    
    

    

