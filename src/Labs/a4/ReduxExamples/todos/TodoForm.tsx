import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todoReducer";
import { LabState } from "../../../store";

 function TodoForm(

  
   ) {

     const { todo } = useSelector((state: LabState) => state.todoReducer);
     const dispatch = useDispatch();

     return (
       <li className="list-group-item">
         <input
           value={todo.title}
           onChange={ (e) =>dispatch(setTodo({ ...todo, title: e.target.value })) }         />
        <button style={{backgroundColor: "yellow", color: "black"}} onClick={() => dispatch(updateTodo(todo))}> Update </button>
         <button style={{backgroundColor: "green", color: "white"}} onClick={() => dispatch(addTodo(todo))}> Add </button>
         
        
       </li>
     );
   }
   export default TodoForm;

  
  