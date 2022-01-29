import { findAliveCells } from './find-alive-cells.js';
import { obtainNeighbors } from './assign-neighbors.js';
import { findDeadCells } from './find-dead-cells.js';
import { updateGrid } from './update-grid.js';

export const nextGen = (grid) => {
    const livingCellsArray = obtainNeighbors(findAliveCells(grid.array));
    const deadCellsArray = obtainNeighbors(
        findAliveCells(grid.array),
        findDeadCells(grid.array)
    );
    return updateGrid(livingCellsArray, deadCellsArray, grid);
};
