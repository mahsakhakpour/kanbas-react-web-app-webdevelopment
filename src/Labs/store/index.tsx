import { configureStore } from "@reduxjs/toolkit";
import HelloReducer from "../a4/ReduxExamples/HelloRedux/HelloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import TodoList from "../a4/ReduxExamples/todos/TodoList";
import todoReducer from "../a4/ReduxExamples/todos/todoReducer";

export type TodoType = {
  id: string;
  title: string;
};

export interface LabState {
    helloReducer: { message: string; };
    counterReducer: { count: number; };
    addReducer: { sum: number; }; 
    todosReducer: {
      todos: TodoType[];
      todo: TodoType;
    };
    
  
}
const store = configureStore({
  reducer: {
    HelloReducer,
    counterReducer,
    addReducer,
    todoReducer,
    
  },
});
export default store;

