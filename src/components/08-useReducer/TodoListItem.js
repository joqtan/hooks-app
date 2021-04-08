import React from 'react'

const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
    return (
        <li className='list-group-item'>
            <p
                className={`${todo.done && 'text-decoration-line-through'}`}
                onClick={() => {
                    handleToggle(todo.id)
                }}
            >
                {i + 1} {todo.desc}
            </p>
            <button
                className='btn btn-outline-danger'
                onClick={() => {
                    handleDelete(todo.id)
                }}
            >
                delete
            </button>
        </li>
    )
}

export default TodoListItem
