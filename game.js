import { generation } from './game-of-life.js';

let array = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

array = generation(array);
console.log(array);
array = generation(array);
console.log(array);
