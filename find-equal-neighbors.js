import { checkColumns } from './check-columns.js';
import { checkRows } from './check-rows.js';
import { checkDiagonal } from './check-diagonal.js';

export const findEqualNeighbors = (array) => {
    const cellsAndNeighbors = [...array];
    for (let i = 0; i < cellsAndNeighbors.length; i += 1) {
        for (let j = 0; j < cellsAndNeighbors.length; j += 1) {
            if (
                i < j &&
                checkRows(cellsAndNeighbors[i], cellsAndNeighbors[j])
            ) {
                cellsAndNeighbors[i].neighbors += 1;
                cellsAndNeighbors[j].neighbors += 1;
            }
            if (
                i < j &&
                checkColumns(cellsAndNeighbors[i], cellsAndNeighbors[j])
            ) {
                cellsAndNeighbors[i].neighbors += 1;
                cellsAndNeighbors[j].neighbors += 1;
            }
            if (
                i < j &&
                checkDiagonal(cellsAndNeighbors[i], cellsAndNeighbors[j])
            ) {
                cellsAndNeighbors[i].neighbors += 1;
                cellsAndNeighbors[j].neighbors += 1;
            }
        }
    }
    return cellsAndNeighbors;
};
