import React, { useCallback, useState } from 'react'
import './focusscreen.css'
import ShowIncrement from './ShowIncrement'
const CallBackHook = () => {
    const [counter, setCounter] = useState(10)

    const increment = useCallback(() => {
        setCounter((c) => c + 1)
    }, [setCounter])

    return (
        <>
            <h1>Use Callback Hook</h1>
            <hr />
            <h3>counter: {counter}</h3>
            <ShowIncrement increment={increment} />
        </>
    )
}

export default CallBackHook
