
// DATE


function addZero(num){
    return (num < 10) ? '0' + num : num;
}

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December']

function getTime(t) {
    let h = addZero(t.getHours());
    let m = addZero(t.getMinutes());
    let sec = addZero(t.getSeconds());

    return `${h}:${m}:${sec}`
}

function getData(d) {
    let n = days[d.getDay()];
    let mon = month[(d.getMonth() + 1)];
    let day = addZero(d.getDate());

    return `${n}, ${mon} ${day}`
}

const userTime= () => document.querySelector('.time').innerHTML = getTime(new Date);

setInterval(userTime, 1000);

document.querySelector('.date').innerHTML = getData(new Date);


// GREETING

function hello(){
    let sayHello = '';
    let currentTime =  new Date().getHours();

    if(currentTime >= 6 && currentTime < 12) {
        sayHello = 'Good morning';
    } else if(currentTime >= 12 && currentTime < 18){
        sayHello = 'Good afternoon';
    }else if(currentTime >= 18 && currentTime < 24){
        sayHello = 'Good evening';
    } else {
        sayHello = 'Good night'
    }

    return sayHello
}

document.querySelector('.greeting').innerHTML = hello();


// AUDIO PLAYER

const player = document.querySelector('.player')
const playBtn = document.querySelector('.play');
const playIcon = document.querySelector('.player-icon');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const audio = document.querySelector('.audio');
const playerControls = document.querySelector('.player-controls')

const songs = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You' , 'Summer Wind'];

let currentSong = 0;

function initSong (song){
    // add active list
    audio.src = `assets/sounds/${song}.mp3`
}

initSong(songs[currentSong]);

function playSong () {
    playBtn.classList.remove('play');
    playBtn.classList.add('pause');
    audio.play();
}

function pauseSong () {
    playBtn.classList.remove('pause');
    playBtn.classList.add('play');
    audio.pause();
}

playBtn.addEventListener('click', () => {
   const isPlay = playBtn.classList.contains('pause');
   if (isPlay) {
    pauseSong()
   } else{
    playSong()
   }
})


