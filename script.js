let GRID_SIZE = 16;
const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize-btn');
const clearBtn = document.querySelector('#clear-btn');

resizeBtn.addEventListener('click', function () {
  do {
    GRID_SIZE = Number(prompt('Enter number of pixels (max is 100):')); 
  } while (!GRID_SIZE || GRID_SIZE < 0 || GRID_SIZE > 100);
  removeGrid();
  drawGrid();
})

clearBtn.addEventListener('click', function () {
  const rows = [...container.children];

  rows.forEach(row => {
    const squares = [...row.children];
    squares.forEach(square => square.style.backgroundColor = 'rgb(255, 255, 255)');
  })
})

const getRandomRGB = function () {
  const red = Math.trunc(Math.random() * 255) + 1;
  const green = Math.trunc(Math.random() * 255) + 1;
  const blue = Math.trunc(Math.random() * 255) + 1;
  return `rgb(${red}, ${green}, ${blue})`;
}

const createGridRow = function () {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let i = 0; i < GRID_SIZE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', function () {
      square.style.backgroundColor = getRandomRGB();
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
