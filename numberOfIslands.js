function removeIsland(grid, row, column) {
  if (row >= grid.length || column >= grid[0].length || row < 0 || column < 0 || grid[row][column] === 0) {
    return;
  }
  grid[row][column] = 0;
  removeIsland(grid, row - 1, column);
  removeIsland(grid, row, column - 1);
  removeIsland(grid, row + 1, column);
  removeIsland(grid, row, column + 1);
}


function numOfIslands(grid) {
  let count = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        removeIsland(grid, i, j);
      }
    }
  }
  return count;
}

const matrix = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
  ];
console.log(numOfIslands(matrix)); // expect 6