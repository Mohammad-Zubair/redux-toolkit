import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {
    // addUser(state, action) {
    //   state.push(action.payload);
    // },
  },
});

export default adminSlice.reducer;
// export const { addUser } = userSlice.actions;
