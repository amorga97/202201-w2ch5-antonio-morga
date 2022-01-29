export const actOnAliveCells = (aliveCellsArray) => {
    const positionsToUpdate = [];
    for (let i = 0; i < aliveCellsArray.length; i += 1) {
        if (
            aliveCellsArray[i].neighbors < 2 ||
            aliveCellsArray[i].neighbors > 3
        ) {
            positionsToUpdate.push(aliveCellsArray[i]);
        }
    }
    return positionsToUpdate;
};
