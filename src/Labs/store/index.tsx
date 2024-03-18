import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import TodoList from "../a4/ReduxExamples/todos/TodoList";
import todoReducer from "../a4/ReduxExamples/todos/todoReducer";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";

export type TodoType = {
  id: string;
  title: string;
};

export interface LabState {
    helloReducer: { message: string; };
    counterReducer: { count: number; };
    addReducer: { sum: number; }; 
    todoReducer: {
      todos: TodoType[];
      todo: TodoType;
    };
}
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todoReducer,
    
  },
});
export default store;

