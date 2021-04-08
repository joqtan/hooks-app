import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { heavyProcess } from '../helpers/HeavyProcess'
import './focusscreen.css'
const MemoHook = () => {
    const { counter, increment } = useCounter(50)
    const [show, setShow] = useState(true)
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

    return (
        <>
            <h2>Memo Hook</h2>
            <hr />
            <h4>
                Counter: <small> {counter}</small>
            </h4>
            <p>{memoHeavyProcess}</p>
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

export default MemoHook
