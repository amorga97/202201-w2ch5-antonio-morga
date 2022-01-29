export const actOnDeadCells = (deadCellsArray) => {
    const positionsToUpdate = [];
    for (const element of deadCellsArray) {
        if (element.neighbors === 3) {
            positionsToUpdate.push(element);
        }
    }
    return positionsToUpdate;
};
