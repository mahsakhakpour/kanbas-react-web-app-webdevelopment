import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Database";

interface Module {
  name: string;
  description: string;
  _id?: string;
  course: string; lessons: [];
};

const initialState = {
  // modules: db.modules,
   module: { name: "New Module", description: "New Description" },
modules: [] as Module[],
};




const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule, setModules} = modulesSlice.actions;
export default modulesSlice.reducer;

