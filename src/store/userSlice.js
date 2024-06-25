import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { uiStartLoading, uiStopLoading } from './uiSlice';
import { baseUrl } from '../styles/config';

export const getCurToken = () => async () => {
  const token = await localStorage.getItem("authToken");
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  };
  return headers;
}

export const getUserInfo = createAsyncThunk('users/getUserInfo', async (id, { dispatch }) => {
  dispatch(uiStartLoading());
  try {
    const token = await localStorage.getItem("authToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    };
    const response = await axios.get(`${baseUrl}/users/${id}`, { headers });
    console.log("Get user info =>", response.data);
    return response.data;
  } catch (error) {
    console.error("getUserInfo ERROR ==>", error);
  } finally {
    dispatch(uiStopLoading());
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    users: [],
    emailExist: false,
  },
  reducers: {
    emailExist: (state, action) => {
      state.emailExist = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  }
});

export const { emailExist } = userSlice.actions;
export default userSlice.reducer;
