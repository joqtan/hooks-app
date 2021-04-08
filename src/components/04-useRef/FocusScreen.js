import React, { useRef } from 'react'
import './focusscreen.css'
const FocusScreen = () => {
    const inputRef = useRef()
    const handleClick = () => {
        inputRef.current.select()
        console.log(inputRef)
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                className='form-control mb-3'
                type='text'
                name=''
                ref={inputRef}
                placeholder='your name'
            />
            <button className='btn btn-outline-primary' onClick={handleClick}>
                Focus
            </button>
        </>
    )
}

export default FocusScreen
