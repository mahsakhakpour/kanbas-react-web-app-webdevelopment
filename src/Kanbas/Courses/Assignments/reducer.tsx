import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Database";

interface Assignment {
  name: string;
  description: string;
  _id?: string;
  course: string; lessons: [];
};

const initialState = {
  // modules: db.modules,
  assignment: { name: "New Assignment", description: "New Description" },
  assignments: [] as Assignment[],
};




const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    // addModule: (state, action) => {
    //   state.modules = [
    //     { ...action.payload, _id: new Date().getTime().toString() },
    //       ...state.modules,
    //   ];
    // },

    addAssignment: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },

    // addAssignment: (state, action) => {
    //   state.assignments = [
    //     { ...action.payload, _id: new Date().getTime().toString() },
    //       ...state.assignments,
    //   ];
    // },


    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },


    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
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


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment, setAssignments} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;