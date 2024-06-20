import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {}, // Initial state is an empty object
  reducers: {
    addstudent(state, action) {
      // Replace the entire state with the new student object
      return action.payload;
    },
    read(state, action) {
      // Replace the entire state with the new data
      return action.payload;
    },
  },
});

export const { addstudent, read } = studentSlice.actions;

export default studentSlice.reducer;
