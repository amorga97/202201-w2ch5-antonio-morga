import { checkColumns } from './check-columns.js';
import { checkRows } from './check-rows.js';
import { checkDiagonal } from './check-diagonal.js';

export const findAliveNeighbors = (deadCells, livingCells) => {
    const livingCellsArray = [...livingCells];
    const deadCellsArray = [...deadCells];
    for (let i = 0; i < deadCells.length; i += 1) {
        for (let j = 0; j < livingCells.length; j += 1) {
            if (checkRows(deadCellsArray[i], livingCellsArray[j])) {
                deadCellsArray[i].neighbors += 1;
            }
            if (checkColumns(deadCellsArray[i], livingCellsArray[j])) {
                deadCellsArray[i].neighbors += 1;
            }
            if (checkDiagonal(deadCellsArray[i], livingCellsArray[j])) {
                deadCellsArray[i].neighbors += 1;
            }
        }
    }
    return deadCellsArray;
};
