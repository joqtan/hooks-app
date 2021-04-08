import React from 'react'
import { useForm } from '../../hooks/useForm'

const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length < 1) return
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        handleAddTodo(newTodo)
        reset()
    }
    return (
        <>
            <h4>add new task</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    className='form-control mb-2'
                    type='text'
                    name='description'
                    placeholder='task description'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                />
                <button className='form-control btn btn-outline-success'>
                    add
                </button>
            </form>
        </>
    )
}

export default TodoAdd
