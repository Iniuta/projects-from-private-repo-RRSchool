const gameContainer = document.querySelector(".game-container");
const repeat = document.querySelector(".repeat");
const moves = document.querySelector(".moves");
const time = document.querySelector(".time");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const mute = document.querySelector(".mute");
const audio = new Audio;



let topDownNeighbor = 4;
let counter = 0;
let sec = 0;
let isTimerOff = true;
let timeInterval;
let isSoundOn = true;

// 

for (let i = 1; i <= 15; i++) {
  const cell = document.createElement("button");
  cell.className = "cell";
  cell.innerHTML = i;

  gameContainer.append(cell);
}

const cellNull = document.createElement("button");
cellNull.className = "cell-null cell";
cellNull.innerHTML = "";

gameContainer.append(cellNull);

const cell = Array.from(document.querySelectorAll(".cell"));

function soundRepeat() {
  const audio = new Audio();
  audio.src = `audio/swap.mp3`;
  audio.autoplay = true;
}

function getRandom() {
  gameContainer.innerHTML = "";
  cell
    .sort(() => Math.random() - 0.5)
    .forEach((elem) => gameContainer.appendChild(elem));
  time.innerHTML = "Time: 00 : 00";
  clearInterval(timeInterval);
  sec = 0;
  isTimerOff = true;
  moves.innerHTML = `Moves: 0`;
  counter = 0;
}

getRandom();

repeat.addEventListener("click", () => getRandom());
repeat.addEventListener("click", () => soundRepeat());

gameContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".cell");
  if (!button) {
    return;
  }
  changeCell(button);
});

// sound ON/OFF

function soundClick() {
  audio.src = `audio/fefteen.mp3`;
  audio.autoplay = true;
}

function toggleSound() {
  mute.classList.toggle("is-active");
  isSoundOn = !isSoundOn;
}

mute.addEventListener("click", () => toggleSound());

// ///////////////////////////

function pad(val) {
  return val > 9 ? val : "0" + val;
}

function timer() {
  time.innerHTML = `Time: ${pad(parseInt(sec / 60))} : ${pad(++sec % 60)}`;
}

function changeCell(button) {
  let buttonNullIndex = -1;
  let buttonIndex = -1;
  let btnToNull = {};

  for (let i = 0; i < cell.length; i++) {
    if (cell[i] === button) {
      buttonIndex = i;
    }
    if (cell[i].textContent === "") {
      buttonNullIndex = i;
    }
  }

  if (
    Math.abs(buttonNullIndex - buttonIndex) === 1 ||
    Math.abs(buttonNullIndex - buttonIndex) === topDownNeighbor
  ) {
    btnToNull = cell[buttonNullIndex];
    cell[buttonNullIndex] = cell[buttonIndex];
    cell[buttonIndex] = btnToNull;

    gameContainer.innerHTML = "";
    cell.forEach((elem) => gameContainer.appendChild(elem));
    counter += 1;
    moves.innerHTML = `Moves: ${counter}`;
    if (isTimerOff) {
      timeInterval = setInterval(timer, 1000);
      isTimerOff = false;
    }
    if(isSoundOn){
      soundClick();
    }
  }
}



