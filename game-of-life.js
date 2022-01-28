import { liveCells } from './find-alive-cells.js';
import { obtainNeighbors } from './obtain-neighbors.js';

let grid = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

let livingCellsArray = liveCells(grid);
let neighbourCells = obtainNeighbors(livingCellsArray);

console.log(neighbourCells);
