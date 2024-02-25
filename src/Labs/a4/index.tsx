import React from "react";
import PassingDataOnEvent from "./PassingDataEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariables from "./DateStateVariables";
import ObjectStateVariables from "./ObjectStateVariables";
import ArrayStateVariables from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return(
    <>
      <h1>Labs</h1>
      <h1>Assignment 4</h1>
      <TodoList />
      
      <ReduxExamples/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariables />
      <ObjectStateVariables />
      <ArrayStateVariables />
      <ParentStateComponent />


      
    
    </>
  );
};
export default Assignment4;