const squarePad = document.querySelector('.square-pad');

for(let i = 0; i < 256; i++){
    const smallGrids = document.createElement('div');
    squarePad.appendChild(smallGrids);
    smallGrids.setAttribute('class', 'small-grids');
}

const smallGrids = document.querySelectorAll('.small-grids');

let isSketching = false;

squarePad.addEventListener('mousedown', () => {
    smallGrids.forEach(smallGrid => smallGrid.addEventListener('mouseover', () => {
        smallGrid.style.cssText = 'background-color: green';
    })) 
})
