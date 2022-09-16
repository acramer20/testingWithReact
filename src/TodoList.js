import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    //adding a new todo
    const create = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    }

    //delete a todo by its id
    const remove = id => {
        setTodos(todos => todos.filter(todo =>todo.id !== id));
    };
    
    const todoComponents = todos.map(todo => (
        <Todo remove={remove} key={todo.id} id={todo.id} task={todo.task}/>
    ));

    return (
        <div>
            <NewTodoForm createTodo={create}/>
            <ul>{todoComponents}</ul>
        </div>
    );
}

export default TodoList;