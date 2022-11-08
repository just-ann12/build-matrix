export const searchClosestCells = (matrix, amount, id) => {
  const flatMatrix = matrix.flat(1);
  const cell = flatMatrix.find((item) => item.id === id);
  if (cell) {
    const sortedMatrixIds = flatMatrix
      .sort(
        (a, b) =>
          Math.abs(a.value - cell.value) - Math.abs(cell.value - b.value)
      )
      .slice(1, amount + 1)
      .map((item) => item.id);
    return sortedMatrixIds;
  }
};
