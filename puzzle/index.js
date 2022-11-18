const gameContainer = document.querySelector(".game-container");
const repeat = document.querySelector(".repeat");
const moves = document.querySelector(".moves");
const time = document.querySelector(".time");
const play = document.querySelector(".play");
const mute = document.querySelector(".mute");
const sizeContainer = document.querySelector(".size-container");
// const buttonSize = document.querySelectorAll(".btn");
const audio = new Audio();

let topDownNeighbor = 4;
let counter = 0;
let sec = 0;
let isTimerOff = true;
let timeInterval;
let isSoundOn = true;
let isSoundRepeatOn = true;
let isPaused = false;
let isChangeCell = true;
let cells = [];

//
initContainer(16, '400px', '400px');

function initContainer(amount, height, width) {
  gameContainer.innerHTML = "";
  gameContainer.style.height = height;
  gameContainer.style.width = width;
  for (let i = 1; i < amount; i++) {
    const cell = document.createElement("button");
    cell.className = "cell";
    cell.innerHTML = i;
    gameContainer.append(cell);
  }
  const cellNull = document.createElement("button");
  cellNull.className = "cell-null cell";
  cellNull.innerHTML = "";
  gameContainer.append(cellNull);
  cells = Array.from(document.querySelectorAll(".cell"));
}



sizeContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".btn");
  if (button) {
    initContainer(button.dataset.amount, button.dataset.height, button.dataset.width);
    getRandom();
  }
});


//  RANDOM CELL FOR GAME

function getRandom() {
  gameContainer.innerHTML = "";
  cells
    .sort(() => Math.random() - 0.5)
    .forEach((elem) => gameContainer.appendChild(elem));
  time.innerHTML = "Time: 00 : 00";
  clearInterval(timeInterval);
  sec = 0;
  isTimerOff = true;
  moves.innerHTML = `Moves: 0`;
  counter = 0;
  if (isSoundRepeatOn) {
    soundRepeat();
  }
}

getRandom();

repeat.addEventListener("click", () => getRandom());

gameContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".cell");
  if (!button) {
    return;
  }
  changeCell(button);
});
// ////////////////////////////

// SOUND ON/OFF

function soundRepeat() {
  const audio = new Audio();
  audio.src = `audio/swap.mp3`;
  audio.autoplay = true;
  audio.volume = 0.05;
}

function soundClick() {
  audio.src = `audio/fefteen.mp3`;
  audio.autoplay = true;
  audio.volume = 0.5;
}

function toggleSound() {
  mute.classList.toggle("is-active");
  isSoundOn = !isSoundOn;
  isSoundRepeatOn = !isSoundRepeatOn;
}

mute.addEventListener("click", () => toggleSound());

// ///////////////////////////

// PLAY/ PAUSE

function togglePlayPause() {
  play.classList.toggle("is-active");
  isPaused = !isPaused;
  isChangeCell = !isChangeCell;
}

play.addEventListener("click", () => togglePlayPause());

// //////////////////////////

// TIMER

function pad(val) {
  return val > 9 ? val : "0" + val;
}

function timer() {
  if (!isPaused) {
    time.innerHTML = `Time: ${pad(parseInt(sec / 60))} : ${pad(++sec % 60)}`;
  }
}

// //////////////////////////

// CHANGE CELL ON CLICK

function changeCell(button) {
  let buttonNullIndex = -1;
  let buttonIndex = -1;
  let btnToNull = {};

  if (isChangeCell) {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] === button) {
        buttonIndex = i;
      }
      if (cells[i].textContent === "") {
        buttonNullIndex = i;
      }
    }
  }

  if (
    Math.abs(buttonNullIndex - buttonIndex) === 1 ||
    Math.abs(buttonNullIndex - buttonIndex) === topDownNeighbor
  ) {
    btnToNull = cells[buttonNullIndex];
    cells[buttonNullIndex] = cells[buttonIndex];
    cells[buttonIndex] = btnToNull;

    gameContainer.innerHTML = "";
    cells.forEach((elem) => gameContainer.appendChild(elem));
    counter += 1;
    moves.innerHTML = `Moves: ${counter}`;
    if (isTimerOff) {
      timeInterval = setInterval(timer, 1000);
      isTimerOff = false;
    }
    if (isSoundOn) {
      soundClick();
    }
  }
}

// ////////////////////////////
