import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => {
                return (
                    <TodoListItem
                        todo={todo}
                        key={todo.id}
                        i={i}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList
