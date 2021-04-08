import React, { memo } from 'react'

export const Child = memo(({ number, increase }) => {
    console.log('  Rendered again :(  ')

    return (
        <button
            className='btn btn-primary mr-3'
            onClick={() => increase(number)}
        >
            {number}
        </button>
    )
})
