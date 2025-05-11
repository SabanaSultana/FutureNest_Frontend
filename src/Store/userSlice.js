import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  flag: false, // ✅ Added flag here
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
    clearUserDetails: (state) => {
      state.user = null;
     
    },
    setFlag: (state, action) => {
      state.flag = action.payload; // ✅ Reducer to set the flag
    },
  },
});

export const { setUserDetails, clearUserDetails, setFlag } = userSlice.actions;
export default userSlice.reducer;
