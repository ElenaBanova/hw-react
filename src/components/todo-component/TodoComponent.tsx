import {ITodo} from "../../models/ITodo.ts";
import './TodoComponent.css';

interface TodoComponentProps {
    item: ITodo
}

const TodoComponent = ({item}: TodoComponentProps) => {
    return (
        <div className='my-10 border-2'>
            <p className = {item.completed ? 'complete' : 'non-complete'}>{item.id}</p>
            <p className='text-2xl font-bold'>{item.todo}</p>
            <p>{item.userId}</p>
        </div>
    );
};

export default TodoComponent;