import {useEffect, useState} from 'react';
import {ITodo} from "../models/ITodo.ts";
import TodoComponent from "./todo-component/TodoComponent.tsx";
import {getTodoComponents} from "../services/api.services.tsx";
import {ITodosResponse} from "../models/ITodosResponse.ts";



const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(()=>{
        getTodoComponents()
            .then(({todos} : ITodosResponse) =>
            setTodos(todos))

        },[]);

    return (
        <div>
            {
                todos.map(todo=> <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};

export default TodoComponents;