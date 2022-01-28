export const checkDiagonal = (firstCell, secondCell) => {
    if (
        (firstCell.row - secondCell.row === 1 ||
            firstCell.row - secondCell.row === -1) &&
        (firstCell.column - secondCell.column === 1 ||
            firstCell.column - secondCell.column === -1)
    ) {
        return true;
    }
    return false;
};
