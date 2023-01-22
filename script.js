const squarePad = document.querySelector('.square-pad');

for(let i = 0; i < 256; i++){
    const smallGrids = document.createElement('div');
    squarePad.appendChild(smallGrids);
    smallGrids.setAttribute('class', 'small-grids');
}
console.log(squarePad.childNodes);
