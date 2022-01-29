/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
import { Grid } from './grid-class.js';

export const updateGrid = (aliveCellsArray, deadCellsArray) => {
    let grid = new Grid();
    actOnAliveCells(aliveCellsArray);
    actOnDeadCells(deadCellsArray);
};
