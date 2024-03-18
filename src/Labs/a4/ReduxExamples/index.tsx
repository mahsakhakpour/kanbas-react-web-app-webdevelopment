import React from "react";
import HelloRedux from "./HelloRedux";
import AddReducer from "./AddRedux/addReducer";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";
import CounterRedux from "./CounterRedux";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      
      <HelloRedux />
      <AddRedux />
      <TodoList />
      <CounterRedux />
      

    </div>
  );
};

export default ReduxExamples;