import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//Global Store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
