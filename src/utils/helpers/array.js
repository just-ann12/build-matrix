export const getArraySum = (array) => array.reduce((acc, num) => acc + num, 0);

export const getPersentage = (arr, el) =>
  Math.round((el * 100) / getArraySum(arr));

export const getValueArrFromObjsArr = (obj) => obj.map(({ value }) => value);

export const getCellPersentage = (objsArr, item) =>
  getPersentage(getValueArrFromObjsArr(objsArr), item);
