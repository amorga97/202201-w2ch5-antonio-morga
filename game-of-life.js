// import { Grid } from './functions/class-grid.js';
import { nextGen } from './functions/next-generation.js';

// export const gridSize = 6;
// let grid = new Grid(gridSize);

const testGrid1 = {
    array: [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
    ],
};

const grid = nextGen(testGrid1);
console.log(grid);
