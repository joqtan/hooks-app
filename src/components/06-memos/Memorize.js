import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import Small from './Small'
import './focusscreen.css'
const Memorize = () => {
    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h2>Memorize</h2>
            <hr />
            <h4>
                Counter: <Small value={counter} />
            </h4>
            <button className='btn btn-primary' onClick={increment}>
                increase
            </button>
            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}

export default Memorize
