import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "../store/uiSlice";
import UserReducer from "../store/userSlice";

const store = configureStore({
  reducer: {
    ui: UIReducer,
    user: UserReducer,
  },
});

export default store;
