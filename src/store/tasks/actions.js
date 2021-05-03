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
