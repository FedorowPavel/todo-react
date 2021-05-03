import { ActionStatus } from '../../constants/action-status';
import * as actionTypes from './types';

const initialState = {
  tasks: [],
  status: ActionStatus.IDLE,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_LIST_TASK_REQUEST:
    case actionTypes.GET_LIST_TASKS_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING,
      };
    }

    case actionTypes.GET_LIST_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload,
        status: ActionStatus.SUCCEEDED,
      };
    }

    case actionTypes.ADD_LIST_TASK_SUCCESS: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        status: ActionStatus.SUCCEEDED,
      };
    }

    default: {
      return state;
    }
  }
}
