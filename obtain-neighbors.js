import { checkColumns } from './check-columns.js';
import { checkRows } from './check-rows.js';
import { checkDiagonal } from './check-diagonal.js';

export const obtainNeighbors = (livingCells) => {
    const cellsAndNeighbors = [...livingCells];
    for (let i = 0; i < cellsAndNeighbors.length - 1; i += 1) {
        if (checkRows(cellsAndNeighbors[i], cellsAndNeighbors[i + 1])) {
            cellsAndNeighbors[i].neighbors += 1;
            cellsAndNeighbors[i + 1].neighbors += 1;
        }

        if (checkColumns(cellsAndNeighbors[i], cellsAndNeighbors[i + 1])) {
            cellsAndNeighbors[i].neighbors += 1;
            cellsAndNeighbors[i + 1].neighbors += 1;
        }
        if (checkDiagonal(cellsAndNeighbors[i], cellsAndNeighbors[i + 1])) {
            cellsAndNeighbors[i].neighbors += 1;
            cellsAndNeighbors[i + 1].neighbors += 1;
        }
    }
    return cellsAndNeighbors;
};
