const squarePad = document.querySelector('.square-pad');
const resetBtn = document.querySelector('.reset');
const size = document.querySelector('#size');
const sizeValue = document.querySelector('.size-value');
const theColor = document.querySelector('#color');
const randomColor = document.querySelector('.random-color');


for(let i = 0; i < 256; i++){
    const smallGrids = document.createElement('div');
    squarePad.appendChild(smallGrids);
    smallGrids.setAttribute('class', 'small-grids');
}

const smallGrids = document.querySelectorAll('.small-grids');

smallGrids.forEach(smallGrid => {
    smallGrid.style.cssText = `width: ${size.value}px; height: ${size.value}px`;
    sizeValue.innerText = `${size.value}px`;

})

size.addEventListener('click', () => {
    smallGrids.forEach(smallGrid => {
        smallGrid.style.cssText = `width: ${size.value}px; height: ${size.value}px`;
        sizeValue.innerText = `${size.value}px`;
    })
})

resetBtn.addEventListener('click', () => {
    location.reload();
})

const sketch = function(e){
    e.target.style.backgroundColor = theColor.value;
}
const nullSketch = function(e){
    e.target.style.backgroundColor = '';
}
squarePad.addEventListener('mousedown', () => {
  smallGrids.forEach(smallGrid => smallGrid.addEventListener('mousemove', sketch));
})
squarePad.addEventListener('mouseup', () => {
    smallGrids.forEach(smallGrid => smallGrid.addEventListener('mouseup', nullSketch));
  })
  

