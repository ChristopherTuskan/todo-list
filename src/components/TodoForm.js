import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const TodoForm = (props) => {
    const [todo, setTodo] = useState("");
    const {todoList, setTodoList} = props;
    const [todoError, setTodoError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.length < 1){
            setTodoError("To Do is required")
        }else{
            setTodoError("")
            const todoObject = {
                text: todo,
                completed: false,
                id: Math.floor(Math.random()*1000000).toString(),
            }
            const newTodoList = [...todoList, todoObject];
            setTodoList(newTodoList);
            localStorage.setItem("todoList", JSON.stringify(newTodoList))
            setTodo("");
        }
    };

    const handleTodo = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className='col-3 mx-auto'>
            <form onSubmit={handleSubmit}>
                {
                    todoError?
                    <p>{todoError}</p>:
                    ''
                }
                <InputGroup className="m-3">
                    <InputGroup.Text>To Do:</InputGroup.Text>
                    <Form.Control
                        value={todo}
                        onChange={handleTodo}
                    />
                </InputGroup>
                <input className="mb-4" type="submit" value="Add Todo"/>
            </form>
        </div>
    )

}

export default TodoForm;