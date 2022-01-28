import { checkColumns } from './check-columns.js';
import { checkRows } from './check-rows.js';
import { checkDiagonal } from './check-diagonal.js';

export const obtainNeighbors = (livingCells) => {
    for (let i = 0; i < livingCells.length - 1; i++) {
        checkRows(livingCells[i], livingCells[i + 1]);
        checkColumns(livingCells[i], livingCells[i + 1]);
        checkDiagonal(livingCells[i], livingCells[i + 1]);
    }
    return livingCells;
};
