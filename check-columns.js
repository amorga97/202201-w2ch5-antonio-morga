export const checkColumns = (firstCell, secondCell) => {
    if (
        firstCell.column === secondCell.column &&
        (firstCell.row - secondCell.row === 1 ||
            firstCell.row - secondCell.row === -1)
    ) {
        return true;
    }
    return false;
};
