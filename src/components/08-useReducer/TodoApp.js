import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './reducer.css'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {
        dispatch({ type: 'delete', payload: todoId })
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({ type: 'add', payload: newTodo })
    }

    return (
        <>
            <h2>
                my tasks: <small>{todos.length}</small>
            </h2>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className='col-5'>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    )
}

export default TodoApp
