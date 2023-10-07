import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLogin: false,
  name: "abc",
  personalDetail: {},
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (abc, action) => {
      console.log(abc);
      abc.isLogin = true;
      abc.personalDetail = { ...action.payload };
    },
    edit: (state) => {},
  },
});
export const { addUser, edit } = UserSlice.actions;
export default UserSlice.reducer;
