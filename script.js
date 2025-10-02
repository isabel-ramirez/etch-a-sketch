let GRID_SIZE = 16;
const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize-btn');

resizeBtn.addEventListener('click', function () {
  GRID_SIZE = Number(prompt('Enter number of pixels (max is 100):')); 
  removeGrid();
  drawGrid();
})

const createGridRow = function () {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let i = 0; i < GRID_SIZE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', function () {
      square.classList.add('hovered');
    })
    row.appendChild(square);
  }

  container.appendChild(row);
}

const drawGrid = function () {
  for (let i = 0; i < GRID_SIZE; i++)
    createGridRow();
}

const removeGrid = function () {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

drawGrid();
