import React from 'react';
import './todo.css'

const Todo = ({todoObj,todos,setTodos}) => {


    const deleteTodo = ()=>{
        setTodos(todos.filter((el)=>{
            return el.id !== todoObj.id
        }))
    };
    const doneTodo= ()=>{
        setTodos(todos.map((el)=>{
            return el.id === todoObj.id ?{...el, isActive : !el.isActive} :el
        }))

    }
    const isImp = ()=>{
        setTodos(todos.map((el)=>{
            return el.id === todoObj.id ?{...el,isImportant:!el.isImportant} :el
        }))
    }
    return (
            <li className='todolist-task'>
                <p className={`todolist-name ${todoObj.isActive ? 'active':'done' }
                ${todoObj.isImportant ? 'imp':''}`}>{todoObj.todoName}</p>
                <div className='todolist_btns'>
                    <button className='todolist-btn' type='button' onClick={doneTodo}>Done</button>
                    <button className='todolist-btn' type='button' onClick={isImp}>Important</button>
                    <button className='todolist-btn' type='button' onClick={deleteTodo}>Delete</button>
                </div>
            </li>

    );
};

export default Todo;