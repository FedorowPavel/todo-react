import { ActionStatus } from '../../constants/action-status';
import * as actionTypes from './types';

const initialState = {
  lists: [],
  status: ActionStatus.IDLE,
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_LIST_SUCCESS: {
      return {
        ...state,
        lists: [...state.lists, action.payload],
        status: ActionStatus.SUCCEEDED,
      };
    }

    case actionTypes.DELETE_LIST_SUCCESS: {
      return {
        ...state,
        lists: [...state.lists.filter((list) => list.id !== action.payload)],
        status: ActionStatus.SUCCEEDED,
      };
    }

    case actionTypes.GET_LISTS_SUCCESS: {
      return {
        ...state,
        lists: action.payload,
        status: ActionStatus.SUCCEEDED,
      };
    }
    case actionTypes.ADD_LIST_REQUEST:
    case actionTypes.DELETE_LIST_REQUEST:
    case actionTypes.GET_LISTS_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING,
      };
    }
    default:
      return state;
  }
}
