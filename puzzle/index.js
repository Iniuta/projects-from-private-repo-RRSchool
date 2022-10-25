const gameContainer = document.querySelector(".game-container");
const repeat = document.querySelector(".repeat");

let topDownNeighbor = 4;


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
  cell.sort(() => Math.random() - 0.5).forEach((elem) => gameContainer.appendChild(elem));
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


function soundClick() {
  const audio = new Audio(); 
  audio.src = `audio/fefteen.mp3`; 
  audio.autoplay = true; 
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
    soundClick()
  }
  

}
