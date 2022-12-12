import {useState, useEffect} from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import DisplayTodoList from './components/DisplayTodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = JSON.parse(localStorage.getItem("todoList"));

  useEffect(()=> {
    if (getTodoList === null){
      setTodoList([]);
    }else{
      setTodoList(getTodoList);
    }
  }, [])

  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
      <DisplayTodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
