export const getArraySum = (array) => array.reduce((acc, num) => acc + num, 0);

export const getPersentage = (arr, el) =>
  Math.round((el * 100) / getArraySum(arr));

export const getArrValueFromObjsArr = (arr) => arr.map(({ value }) => value);

export const getCellPersentage = (objsArr, item) =>
  getPersentage(getArrValueFromObjsArr(objsArr), item);
