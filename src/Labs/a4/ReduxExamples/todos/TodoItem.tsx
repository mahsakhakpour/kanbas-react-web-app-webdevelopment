import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todoReducer";
import { TodoType } from "../../../store";

type todoProps = {
  todo : TodoType
}
 function TodoItem({ todo } : todoProps )
 
  

    {
     const dispatch = useDispatch();
     return (
       <li key={todo.id} className="list-group-item">
        {todo.title}
         <button style={{backgroundColor: "blue", color: "white"}} onClick={() => dispatch(setTodo(todo))}> Edit </button>
         <button style={{backgroundColor: "red", color: "white"}} onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
        
         
       </li>
     );
   }
   export default TodoItem;


  

