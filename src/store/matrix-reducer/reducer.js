import {
  SET_MATRIX,
  ADD_ROW,
  REMOVE_ROW,
  SET_SETTINGS,
  SET_CLOSEST_CELL_IDS,
} from "../action-types";

const initialState = {
  data: [],
  settings: {
    columns: 0,
    rows: 0,
    cells: 0,
  },
  closetsIds: [],
};

const data = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ROW: {
      const newData = [...state.data, payload];
      return { ...state, data: newData };
    }

    case SET_MATRIX:
      return { ...state, data: payload };

    case REMOVE_ROW: {
      const newData = state.data.filter((_item, index) => index !== payload);
      return { ...state, data: newData };
    }

    case SET_SETTINGS: {
      return { ...state, settings: payload };
    }

    case SET_CLOSEST_CELL_IDS: {
      return { ...state, closetsIds: payload };
    }

    default:
      return state;
  }
};

export default data;
