export const actOnDeadCells = (deadCellsArray) => {
    const positionsToUpdate = [];
    for (let i = 0; i < deadCellsArray.length; i += 1) {
        if (deadCellsArray[i].neighbors === 3) {
            positionsToUpdate.push(deadCellsArray[i]);
        }
    }
    return positionsToUpdate;
};
