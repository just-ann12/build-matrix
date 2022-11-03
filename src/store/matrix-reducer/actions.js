import {
  SET_MATRIX,
  ADD_ROW,
  REMOVE_ROW,
  SET_SETTINGS,
  SET_CLOSEST_CELL_IDS,
} from "../action-types";

export const setMatrix = (matrix) => {
  return {
    type: SET_MATRIX,
    payload: matrix,
  };
};

export const addRow = (row) => {
  return {
    type: ADD_ROW,
    payload: row,
  };
};

export const removeRow = (index) => {
  return {
    type: REMOVE_ROW,
    payload: index,
  };
};

export const setSettings = (val) => {
  return {
    type: SET_SETTINGS,
    payload: val,
  };
};
export const setClosestCellIds = (closestIds) => {
  return {
    type: SET_CLOSEST_CELL_IDS,
    payload: closestIds,
  };
};
