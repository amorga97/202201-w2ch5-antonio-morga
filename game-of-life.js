import { Grid } from './functions/class-grid.js';
import { nextGen } from './functions/next-generation.js';

export const gridSize = 6;
let grid = new Grid(gridSize);

grid = nextGen(testGrid1);
console.log(grid);
