import {useSelector, useDispatch} from 'react-redux';
import {addTodo, toggleTodo, deleteTodo, editTodo} from "./store/actions/TodoAction";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

function App() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const handleToggleTodo = (index) => {
        dispatch(toggleTodo(index))
    }
    const handleAddTodo = (e) => {
        e.preventDefault();
        const input = e.target.elements.todo;
        if (!input.value) {
            return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
    }

    const editHandle = (index)=>{
        const input = prompt('Enter new text:');
        if (input) {
            dispatch(editTodo(input, index));
        }
    }
    console.log(todos)

    return (
        <div className="main">
            <h3>TODOS</h3>
            <form onSubmit={handleAddTodo}>
                <input name="todo"/>
                <button type="submit">Add Todo</button>
            </form>
            <ul style={{textAlign:"left", display:"inline-block"}}>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleTodo(index)}
                            />
                            <span style={{textDecoration:todo.completed ? "line-through" : false}}>
                                {todo.text}
                            </span>
                        </label>
                        <EditOutlined style={{color:"green"}} onClick={()=>editHandle(index)} />
                        <DeleteOutlined style={{color:"red"}} onClick={()=>dispatch(deleteTodo(index))} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
