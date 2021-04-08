import React, { useEffect, useState } from 'react'

const Message = (props) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords
    useEffect(() => {
        const mouseMove = (e) => {
            setCoords({ x: e.x, y: e.y })
        }
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    return (
        <>
            <h3>you're cool</h3>
            <p>
                x:{x} y:{y}
            </p>
        </>
    )
}

export default Message
