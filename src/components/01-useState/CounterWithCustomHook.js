import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'
const CounterWithCustomHook = () => {
    const { state, decrement, increment, reset } = useCounter()
    return (
        <>
            <h1>Counter App with Hook: {state}</h1>
            <hr />
            <button className='btn btn-primary' onClick={() => decrement(2)}>
                -1
            </button>
            <button className='btn btn-primary' onClick={reset}>
                reset
            </button>
            <button className='btn btn-primary' onClick={() => increment(2)}>
                +1
            </button>
        </>
    )
}

export default CounterWithCustomHook
