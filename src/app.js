import React,{useState} from 'react';
import './app.css'
import Header from "./Components/header/header";
import Search from "./Components/Search/search";
import TodoList from "./Components/Todolist/todoList";
import Addtodo from "./Components/addtodo/addtodo";

const App = () => {
    const [todos,setTodos]=useState([]);
    const [todoText,setTodoText] = useState('');
    const [status,setStatus] =useState('all');
    const [search,setSearch]=useState('');


    return (
        <div className='app'>
            <div className='app-container'>
               <Header/>
                <Search search={search} setSearch={setSearch} status={status} setStatus={setStatus}/>
                <TodoList search={search} status={status} setTodos={setTodos} todos={todos}/>
               <Addtodo  todoText={todoText} setTodoText={setTodoText} todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    );
};

export default App;