import React, { useState } from  "react";
import "./login.css";
import { doSignInWithEmailAndPassword } from "./Firebase/auth";
import { useAuth } from "./context/authContext";

function Login () {
    const {userLoggedIn} = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e. preventDefault()
        if(!isSigningIn){
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    return (
        <div id="login">
            {userLoggedIn && (<Navigate to={'./Landing/landingtop.jsx'} replace={true}/>)}
            <header>
            </header>
            <main>
                <form onSubmit={onSubmit}>
                    <div id="email">
                        <label>E-mail</label>
                        <input type="email" autoComplete="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required></input>
                    </div>

                    <div id="password">
                        <label>Password</label>
                        <input type="password" autoComplete="current-password" value={password} onChange={(e) => {setPassword(e.target.value)}} required></input>
                    </div>

                    {
                        errorMessage && (<span>{errorMessage}</span>)
                    }
                    <button typ='submit' disabled={isSigningIn}>
                        {isSigningIn ? 'Signing in..': 'Sign in'}
                    </button>
                </form>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default Login;