const GRID_SIZE = 16;
const container = document.querySelector('#container');

const createGridRow = function () {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let i = 0; i < GRID_SIZE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);
  }

  container.appendChild(row);
}

for (let i = 0; i < GRID_SIZE; i++) {
  createGridRow();
}
