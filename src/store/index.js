import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import userFormReducer from "./users/slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    userForm: userFormReducer,
  },
});
