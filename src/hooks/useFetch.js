import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    const isMounted = useRef(true)
    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])
    const [state, setState] = useState({
        data: null,
        error: null,
        loading: true,
    })
    useEffect(() => {
        setState({ data: null, error: null, loading: true })
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted.current) {
                    setState({ data: data, error: null, loading: false })
                }
            })
    }, [url])
    return state
}
