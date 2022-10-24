const gameContainer = document.querySelector('.game-container');
const cell = Array.from(document.querySelectorAll('.cell'));
const repeat = document.querySelector('.repeat');


function getRandom () {
    gameContainer.innerHTML = ''; 
    cell.sort(() => Math.random() - 0.5)
    .forEach( elem => gameContainer.appendChild(elem));
}

repeat.addEventListener('click', () => getRandom())

gameContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.cell');
    if(!button){
        return
    }
    changeCell(button)
})

function changeCell (button) {
    let buttonNullIndex = -1;
    let buttonIndex = -1;
    let btnToNull = {};

    for(let i = 0; i < cell.length; i++){
        if(cell[i] === button){
            buttonIndex = i
        };
        if(cell[i].textContent === ''){
            buttonNullIndex = i
        }
    }

    btnToNull = cell[buttonNullIndex];
    cell[buttonNullIndex] = cell[buttonIndex];
    cell[buttonIndex] = btnToNull;

    gameContainer.innerHTML = ''; 
    cell.forEach(elem => gameContainer.appendChild(elem))

}

