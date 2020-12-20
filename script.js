let grid = document.getElementsByClassName('grid');
let position;

function add() {
    let randomNumber = Math.floor(Math.random() * 9);
    position = randomNumber + 1;
    // add the mole
    grid[randomNumber].classList.add('mole');
    // remove the mole
    setTimeout(() => {
        grid[randomNumber].classList.remove('mole')
    }, 1000);
}

setInterval(add, 1000);

for (let i = 0; i < 9; i++) {
    let div = grid[i]
    div.addEventListener('click', () => {
        if (position == div.id) {
            console.log('Clicked !');
        }
    })
}
