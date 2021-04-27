import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actionTypes from "./types";
import apiService from "../../services/api-service";

export const addList = createAsyncThunk(actionTypes.ADD_LIST, async (list) => {
  const response = await apiService.post("lists", list);
  return response;
});

// export const deleteList = (id) => ({
//   type: actionTypes.DELETE_LIST,
//   payload: id,
// });

export const deleteList = createAsyncThunk(
  actionTypes.DELETE_LIST,
  async (id) => {
    const response = await apiService.delete(`lists/${id}`);
    return id;
  }
);

export const getLists = createAsyncThunk(actionTypes.GET_LISTS, async () => {
  const response = await apiService.get("lists");
  return response;
});
