export const increaseMatrixCellVal = (matrix, id) => {
    const matrixWithIncreasedCellVal = matrix.map((row) =>
      row.map((item) => {
        if (item.id === id) {
          item.value = item.value + 1;
          return item;
        }
        return item;
      })
    )
    return matrixWithIncreasedCellVal;
}