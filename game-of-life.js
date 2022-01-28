import { liveCells } from './find-alive-cells.js';
import { obtainNeighbors } from './obtain-neighbors.js';

const grid = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

const livingCellsArray = liveCells(grid);
const neighbourCells = obtainNeighbors(livingCellsArray);

console.log(neighbourCells);
