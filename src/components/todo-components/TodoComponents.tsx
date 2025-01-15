import {useEffect, useState} from "react";
import {ITodo} from "../../model/ITodo.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getUsers} from "../../services/api.service.ts";


const TodoComponents = () => {
    const [users, setUsers] = useState<ITodo[]>([]);
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            });
        return () => {
            console.log('yes');
        }
    }, [])


    return (
        <div>
            {
                users.map(user => <TodoComponent key={user.id} item={user}/>)
            };
        </div>

    );
};

export default TodoComponents;