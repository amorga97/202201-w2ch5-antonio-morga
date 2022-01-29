import { Grid } from './grid-class.js';
import { nextGen } from './next-generation.js';

export const gridSize = 6;
let grid = new Grid(gridSize);

grid = nextGen(grid);
console.log(grid);
