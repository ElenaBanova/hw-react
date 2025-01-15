import {ITodo} from "../../model/ITodo.ts";

interface TodoComponentProps {
    item: ITodo;
}

const TodoComponent = ({item}: TodoComponentProps) => {

    return (
        <div className='my-10 border-2'>
            <p>{item.userId}</p>
            <p>{item.id}</p>
            <p className='text-2xl font-bold'>{item.title}</p>
            <p>{item.completed}</p>
        </div>
    );
};

export default TodoComponent;