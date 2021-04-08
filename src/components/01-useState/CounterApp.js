import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import './counter.css'

const CounterApp = (props) => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
    })
    const { counter1, counter2 } = state

    return (
        <>
            <h1>counter1 {counter1}</h1>
            <h1>counter2 {counter2}</h1>
            <hr />
            <button
                onClick={() => {
                    setState({ ...state, counter1: counter1 + 1 })
                }}
                className='btn btn-primary'
            >
                +1
            </button>
        </>
    )
}

// CounterApp.propTypes = {}

export default CounterApp
