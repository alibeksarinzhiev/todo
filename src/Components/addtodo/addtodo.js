import React from 'react';
import './addtodo.css'


const Addtodo = ({todos,setTodos,setTodoText,todoText}) => {
    const addTodo=(e)=>{
        e.preventDefault();
        setTodos([...todos,{
            todoName:todoText,
            isImportant:false,
            isActive:true,
            id: Math.floor(Math.random()*1000)
        }]);
        setTodoText('')
    };
    const inputChange = (e)=>{
        setTodoText(e.target.value)
    }

    return (
        <form action="" className='addTodo' onSubmit={addTodo}>
            <input type="text" placeholder='what you must do' className='addTodo-input' onChange={inputChange} value={todoText}/>
            <button className='addTodo-btn' type='submit'>ADD TODO</button>
        </form>
    );
};

export default Addtodo;