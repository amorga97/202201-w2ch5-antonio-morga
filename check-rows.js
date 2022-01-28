export const checkRows = (firstCell, secondCell) => {
    if (
        firstCell.row === secondCell.row &&
        (firstCell.column - secondCell.column === 1 ||
            firstCell.column - secondCell.column === -1)
    ) {
        return true;
    }
    return false;
};
