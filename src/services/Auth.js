import axios from 'axios';
import { uiStartLoading, uiStopLoading } from '../store/uiSlice';
import { baseUrl } from '../styles/config';
import { getUserInfo } from '../store/userSlice';

export const verifyLogIn = (authData, isRememberMe) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const response = await axios.post(`${baseUrl}/login`, authData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log("Response => ", response.data);
    const token = response.data.token;
    const role = response.data.role;
    const id = response.data.id;
  
    localStorage.setItem("authToken", token);
    localStorage.setItem("role", role);
    localStorage.setItem("userID", id.toString());
    localStorage.setItem("isRemember", isRememberMe.toString());
  
    await dispatch(getUserInfo(id));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    dispatch(uiStopLoading());
  }
};

export const authLogout = () => async () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("role");
  localStorage.removeItem("userID");
  localStorage.removeItem("isRemember");
};