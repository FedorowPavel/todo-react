import * as actionTypes from "./types";

const initialState = {
  lists: [],
  status: "idle",
};

export function lists(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_LIST_SUCCESS: {
      console.log("[add_case]");
      return {
        ...state,
        lists: [...state.lists, action.payload],
        status: "succeeded",
      };
    }

    case actionTypes.DELETE_LIST_SUCCESS: {
      console.log("[delete_case]");
      return {
        ...state,
        lists: [...state.lists.filter((list) => list.id !== action.payload)],
      };
    }

    case actionTypes.GET_LISTS_SUCCESS: {
      return {
        ...state,
        lists: action.payload,
        status: "succeeded",
      };
    }
    case actionTypes.ADD_LIST_REQUEST:
    case actionTypes.GET_LISTS_REQUEST: {
      return {
        ...state,
        status: "loading",
      };
    }
    default:
      return state;
  }
}
