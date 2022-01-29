import { Grid } from "./grid-class.js";

export const updateGrid = (aliveCellsArray, deadCellsArray) {
    let grid = new Grid;
    actOnAliveCells(aliveCellsArray);
    actOnDeadCells(deadCellsArray);
}
