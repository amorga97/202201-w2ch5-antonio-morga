import { Cell } from './cell-class.js';

export const liveCells = (grid) => {
    let liveCellsArray = [];
    for (let rowPos = 0; rowPos < grid.length; rowPos++) {
        for (let colPos = 0; colPos < grid[rowPos].length; colPos++) {
            if (grid[rowPos][colPos])
                liveCellsArray.push(new Cell(rowPos, colPos, true));
        }
    }
    return liveCellsArray;
};
