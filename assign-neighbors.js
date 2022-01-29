import { findAliveNeighbors } from './find-alive-neighbors.js';
import { findEqualNeighbors } from './find-equal-neighbors.js';

export const obtainNeighbors = (livingCells, deadCells) => {
    let assignedNeighbors = [];
    if (!deadCells) {
        assignedNeighbors = findEqualNeighbors(livingCells);
    } else {
        assignedNeighbors = findAliveNeighbors(deadCells, livingCells);
    }
    return assignedNeighbors;
};
