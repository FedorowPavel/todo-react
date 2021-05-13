import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actionTypes from './types';
import apiService from '../../services/api-service';

export const getListTasks = createAsyncThunk(
  actionTypes.GET_LIST_TASKS,
  (listId) => apiService.get(`lists/${listId}/tasks`)
);

export const addListTask = createAsyncThunk(
  actionTypes.ADD_LIST_TASK,
  ({ newTask, listId }) => apiService.post(`lists/${listId}/tasks`, newTask)
);

export const updateListTask = createAsyncThunk(
  actionTypes.UPDATE_LIST_TASK,
  (task) => apiService.put(`lists/${task.listId}/tasks/${task.id}`, task)
);

export const deleteListTask = createAsyncThunk(
  actionTypes.DELETE_LIST_TASK,
  async ({ taskId, listId }) => {
    await apiService.delete(`lists/${listId}/tasks/${taskId}`);

    return taskId;
  }
);

export const deleteCheckedListTasks = createAsyncThunk(
  actionTypes.DELETE_CHECKED_LIST_TASK,
  async (listId, store) => {
    const state = store.getState();

    const { tasks } = state.tasks;

    const checkedTasks = tasks.filter((task) => task.checked);

    await Promise.all(
      checkedTasks.map((task) =>
        apiService.delete(`lists/${listId}/tasks/${task.id}`)
      )
    );

    return checkedTasks.map((task) => task.id);
  }
);
