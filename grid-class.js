export class Grid {
    constructor(size) {
        this.grid = [];
        this.row = [];
        for (let i = 0; i < size; i += 1) {
            this.row.push(0);
        }
        for (let i = 0; i < size; i += 1) {
            this.grid.push(this.row);
        }
    }
}
