import { liveCells } from './find-alive-cells.js';
import { obtainNeighbors } from './assign-neighbors.js';
import { findDeadCells } from './find-dead-cells.js';
import { updateGrid } from './update-grid.js';

let grid = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

let livingCellsArray = liveCells(grid);
let deadCellsArray = findDeadCells(grid);
livingCellsArray = obtainNeighbors(livingCellsArray);
deadCellsArray = obtainNeighbors(livingCellsArray, deadCellsArray);
grid = updateGrid(livingCellsArray, deadCellsArray);

console.log('living cells', livingCellsArray);
console.log('dead cells', deadCellsArray);
