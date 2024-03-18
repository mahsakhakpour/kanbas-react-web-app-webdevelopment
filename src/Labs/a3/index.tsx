import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./Todos/TodoItem";
import PathParameters from "./JavaScript/Routing/PathParameters";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todoReducer);
    return (
      <div className="container">
        <h1>Assignment 3</h1>
          <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>         
        <PathParameters />
        <JavaScript/>        
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
          vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
        <Add a={3} b={4} />
  
        <TodoItem />

<h2>Todo List</h2>
        <ul className="List-group">          
          <TodoItem todo={{ "title": "Buy milk", "status": "CANCELED", "done": true   }}/>
          <TodoItem todo={{ "title": "Pickup the kids",   "status": "IN PROGRESS",  "done": false  }}/>
          <TodoItem todo={{ "title": "Walk the dog",      "status": "DEFERRED",     "done": false  }}/>
        </ul>
      </div>
    );
  }
  export default Assignment3;
  
  