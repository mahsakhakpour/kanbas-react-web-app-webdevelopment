import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Database";

interface assignment {
  name: string;
  description: string;
  _id?: string;
  course: string; lessons: [];
};


const initialState = {
  // assignments: db.assignments,
  assignment: { name: "New Assignment", description: "New Description" },
  assignments: [] as assignment[],
  };
  

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {

    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },



    addAssignment: (state, action) => {
      console.log(action.payload)
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },


    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },


    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return { ...assignment, ...action.payload };
        } else {
          return assignment;
        }
      });
    },




    setAssignment: (state, action) => {
      state.assignment = action.payload;

    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
