import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add() {},
    edit() {},
    del() {},
  },
});

export const { add, edit, del } = cartSlice.actions;
export default cartSlice.reducer;
