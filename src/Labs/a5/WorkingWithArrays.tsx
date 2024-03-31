import React, { useState, useEffect } from "react";
import axios from "axios";
import { updateTodo } from "../a4/ReduxExamples/todos/todoReducer";

interface Todo {
    id: number;
    title: string;
    description: string;
    due: string;
    completed: boolean;
    task: string;
}

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState<Todo>({
        id: 1,
        title: "NodeJS Assignment",
        description: "Edit the description",
        due: "11/04/2023",
        completed: false,
        task: "New Task",
        // numbers: "169861375414",

    });

    const [todos, setTodos] = useState<Todo[]>([]);
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const fetchTodos = async () => {
        try {
            const response = await axios.get<Todo[]>(API);
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };
    const removeTodo = async (todoId: number) => {
        const response = await axios.get(`${API}/${todoId}/delete`);
        setTodos(response.data);
    };

    const fetchTodoById = async (todoId: number) => {
        const response = await axios.get(`${API}/${todoId}`);
        setTodo(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const deleteTodo = async (todo: Todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }

    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>

            <a className="btn btn-primary" href={API}>
                Get Todos
            </a>

            <h3>Filtering Array Items</h3>
            <a className="btn btn-primary" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>

            <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary" href={`${API}/create`} style={{ width: '400px', display: 'inline-block', textAlign: 'center' }}>
                Create Todo
            </a>
            <h3>Working with Arrays</h3>

            <input value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: +e.target.value
                })} />

            <h3>Deleting from an Array</h3>
            <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>

            <h3>Working with Arrays</h3>

            <input value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: +e.target.value
                })} />
                <br />
                <br />

            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <h3>Updating an Item in an Array</h3>
            <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a>
            <br />
            <br />
            <input
                type="text"
                value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
            />
            <br />

            <div style={{ display: 'flex' }}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => setTodo({
                        ...todo,
                        completed: e.target.checked
                    })}

                />
                <h4>Edit completed</h4>
            </div>
            <br />

            <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`}>
                Complete Todo ID = 1
            </a>
            <br />
            <br />

            <a className="btn btn-primary" href={`${API}/${todo.id}/description/${todo.description}`}>
                Describe Todo ID = 1
            </a>
            <br />
            <br />
            <div>
                {/* <h3>Working with Arrays</h3> */}
                <h3>Working with Arrays</h3>

                <input
                    type="text"
                    value={todo.task}
                    onChange={(e) => setTodo({
                        ...todo,
                        task: e.target.value
                    })}
                />
                <br />
                <br />

                <textarea value={todo.description}
                    onChange={(e) => setTodo({
                        ...todo,
                        description: e.target.value
                    })}
                    style={{ width: '200px', height: '30px' }} />
                <br />
                <br />
                <input value={todo.due} type="date"
                    onChange={(e) => setTodo({
                        ...todo, due: e.target.value
                    })} />
                <br />
                <br />
                <label>
                    <input checked={todo.completed} type="checkbox" onChange={(e) =>
                        setTodo({ ...todo, completed: e.target.checked })} />
                    Completed
                </label>
                <br />
                <button onClick={postTodo} className="btn btn-warning"
                    style={{ width: '200px', display: 'inline-block', textAlign: 'center' }} > Post Todo </button>
                <br />
                <br />


                <button onClick={createTodo} className="btn btn-primary"
                    style={{ width: '200px', display: 'inline-block', textAlign: 'center' }} >Create Todo </button>
                <br />
                <br />

                <button onClick={updateTodo} className="btn btn-success"
                    style={{ width: '200px', display: 'inline-block', textAlign: 'center' }} >Update Title </button>
                <br />
                <br />
                {/* <button onClick={() => deleteTodo(todo)}
                    className="btn btn-danger float-end ms-2">
                    Delete
                </button> */}

{errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}


                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {todos.map((todo) => (
                        <div key={todo.id} className="list-group-item" style={{ marginBottom: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <input checked={todo.completed} type="checkbox" />
                            <div>
                                <span>{todo.title}</span>
                                <p>{todo.description}</p>
                                <p>{todo.due}</p>
                            </div>
                            <button className="btn btn-danger" onClick={() => removeTodo(todo.id)} style={{ marginLeft: '10px' }}>
                                Delete
                            </button>
                            <button className="btn btn-warning" onClick={() => fetchTodoById(todo.id)} style={{ marginRight: '10px' }}>
                                Edit
                            </button>
                        </div>
                    ))}
                </div>

            </div>
            <br />
            <br />
            <br />
        </div>

    );
}
export default WorkingWithArrays;