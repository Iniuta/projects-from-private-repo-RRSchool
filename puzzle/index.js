const gameContainer = document.querySelector('.game-container');
const cell = Array.from(document.querySelectorAll('.cell'));
const button = document.querySelector('.repeat');



function getRandom () {
    gameContainer.innerHTML = ''; 
    cell.sort(() => Math.random() - 0.5)
    .forEach( elem => gameContainer.appendChild(elem));
}

button.addEventListener('click', () => getRandom())


function changeCell () {
    
}