import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import AdminSlice from "./slices/AdminSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    admin: AdminSlice,
  },
});

export default store;
