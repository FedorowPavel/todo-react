import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actionTypes from './types';
import apiService from '../../services/api-service';

export const addList = createAsyncThunk(actionTypes.ADD_LIST, async (list) => apiService.post('lists', list));

// export const deleteList = (id) => ({
//   type: actionTypes.DELETE_LIST,
//   payload: id,
// });

export const deleteList = createAsyncThunk(
  actionTypes.DELETE_LIST,
  async (id) => {
    await apiService.delete(`lists/${id}`);
    return id;
  }
);

export const getLists = createAsyncThunk(actionTypes.GET_LISTS, async () => apiService.get('lists'));
