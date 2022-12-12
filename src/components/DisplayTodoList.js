import React from 'react';

const DisplayTodoList = (props) => {
    const {todoList, setTodoList} = props;

    const handleDelete = (todoID) => {
        const filteredTodoList = todoList.filter((todo,index) => {
            return todo.id !== todoID;
        });
        setTodoList(filteredTodoList);
        localStorage.setItem("todoList", JSON.stringify(filteredTodoList));
    }

    const handleCompleted = (todo) => {
        let updatedTodoList = todoList.map((oldTodo)=> {
            if (oldTodo === todo){
                let updatedTodo = {...oldTodo};
                updatedTodo.completed = !updatedTodo.completed;
                return updatedTodo;
            }else{
                return oldTodo;
            }
        })
        setTodoList(updatedTodoList);
        localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    }
    
    return (
        todoList.map((todo, index) => 
            <div>
                <div className="d-inline-flex">
                    {
                        todo.completed ?
                        <p key={index}><del>{todo.text}</del></p>:
                        <p key={index}>{todo.text}</p>
                    }
                </div>
                <div className="d-inline-flex m-2">
                    <input type="checkbox" checked={todo.completed} onChange={()=>handleCompleted(todo)}/>
                </div>
                <div className="d-inline-flex m-2">
                    <input type="button" value="Delete" onClick={()=>handleDelete(todo.id)}/>
                </div>
            </div>
        )
    )
}

export default DisplayTodoList;