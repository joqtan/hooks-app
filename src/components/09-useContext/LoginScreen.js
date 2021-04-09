import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {
    const { setUser } = useContext(UserContext)
    return (
        <>
            <h1>Login Screen</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => {
                    setUser({ id: new Date().getTime(), name: 'joqtan' })
                }}
            >
                Login
            </button>
        </>
    )
}

export default LoginScreen
