import React, { memo } from 'react'

const ShowIncrement = memo(({ increment }) => {
    console.log('rendered again :/')
    return (
        <button
            className='btn btn-primary'
            onClick={() => {
                increment()
            }}
        >
            increment
        </button>
    )
})

export default ShowIncrement
