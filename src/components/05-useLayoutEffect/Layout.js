import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './examples.css'
const Layout = () => {
    const { counter, increment } = useCounter(1)
    const { data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    )

    /*
     * on null = true !! on null = false. That is why we used !!data to transforn null to false
     */
    const { quote } = !!data && data[0]
    const parTag = useRef()
    useLayoutEffect(() => {
        console.log(parTag.current.getBoundingClientRect())
    }, [quote])
    return (
        <>
            <h3>Layout Effect</h3>
            <hr />

            <figure className='text-end'>
                <blockquote className='blockquote'>
                    <p ref={parTag}>{quote}</p>
                </blockquote>
            </figure>

            <button className='btn btn-primary' onClick={increment}>
                Next quote
            </button>
        </>
    )
}

export default Layout
