import { ActionStatus } from '../../constants/action-status';
import * as actionTypes from './types';

const initialState = {
  tasks: [],
  status: ActionStatus.IDLE,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_LIST_TASK_REQUEST:
    case actionTypes.GET_LIST_TASKS_REQUEST:
    case actionTypes.DELETE_LIST_TASK_REQUEST:
    case actionTypes.DELETE_CHECKED_LIST_TASK_REQUEST:
    case actionTypes.UPDATE_LIST_TASK_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING,
      };
    }

    case actionTypes.DELETE_CHECKED_LIST_TASK_SUCCESS: {
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.filter((task) => !action.payload.includes(task.id)),
      };
    }

    case actionTypes.GET_LIST_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload,
        status: ActionStatus.SUCCEEDED,
      };
    }

    case actionTypes.UPDATE_LIST_TASK_SUCCESS: {
      const updatedTask = action.payload;
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.map((task) => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          }
          return task;
        }),
      };
    }

    case actionTypes.ADD_LIST_TASK_SUCCESS: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        status: ActionStatus.SUCCEEDED,
      };
    }

    case actionTypes.DELETE_LIST_TASK_SUCCESS: {
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
}
