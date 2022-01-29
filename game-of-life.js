import { liveCells } from './find-alive-cells.js';
import { obtainNeighbors } from './assign-neighbors.js';
import { findDeadCells } from './find-dead-cells.js';
import { updateGrid } from './update-grid.js';

let grid = {
    array: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
    ],
};

let livingCellsArray = liveCells(grid.array);
let deadCellsArray = findDeadCells(grid.array);
livingCellsArray = obtainNeighbors(livingCellsArray);
deadCellsArray = obtainNeighbors(
    liveCells(grid.array),
    findDeadCells(grid.array)
);
grid = updateGrid(livingCellsArray, deadCellsArray);
