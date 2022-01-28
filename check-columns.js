export const checkColumns = (firstCell, secondCell) => {
    if (
        firstCell.column === secondCell.column &&
        (firstCell.row - secondCell.row === 1 ||
            firstCell.row - secondCell.row === -1)
    ) {
        firstCell.neighbors += 1;
        secondCell.neighbors += 1;
    }
};
