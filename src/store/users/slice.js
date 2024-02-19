import { createSlice } from "@reduxjs/toolkit";

export const userFormSlice = createSlice({
  name: "userForm",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setFirstName, setLastName } = userFormSlice.actions;
export default userFormSlice.reducer;
