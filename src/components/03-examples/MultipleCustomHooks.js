import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './examples.css'
// import PropTypes from 'prop-types'
const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1)
    const { loading, data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    )

    /*
     * on null = true !! on null = false. That is why we used !!data to transforn null to false
     */
    const { author, quote } = !!data && data[0]
    return (
        <>
            <h3>Breaking Bad quotes</h3>
            <hr />
            {loading && (
                <div className='alert alert-info text-center'>loading...</div>
            )}
            {!loading && (
                <figure className='text-end'>
                    <blockquote className='blockquote'>
                        <p>{quote}</p>
                    </blockquote>
                    <figcaption className='blockquote-footer'>
                        {author}
                    </figcaption>
                </figure>
            )}

            <button className='btn btn-primary' onClick={increment}>
                Next quote
            </button>
        </>
    )
}

// MultipleCustomHooks.propTypes = {}

export default MultipleCustomHooks
