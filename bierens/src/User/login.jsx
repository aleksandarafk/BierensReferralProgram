import React, { useState } from 'react';
import './login.css';
import welcomeimage from "./image/welcome-autumn.png"
import logo from "./image/bierens-logo-white.png"

const Login = () => {

    // const { userLoggedIn } = useAuth()
    // const userLoggedIn = useAuth()

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [isSigningIn, setIsSigningIn] = useState(false)
    // const [errorMessage, setErrorMessage] = useState('')

    // const onSubmit = async (e) => {
    //     e.preventDefault()
    //     if(!isSigningIn) {
    //         setIsSigningIn(true)
    //         await doSignInWithEmailAndPassword(email, password)
    //         // doSendEmailVerification()
    //     }
    // }

    return (
            <div id="login">
                {/* {userLoggedIn && (<Navigate to={'/loggedin'} replace={true} />)}  */}
                    <form id='form'>
                        <img src={logo} id="logo" />
                        <img src={welcomeimage} id="welcome-image" />
                        <div id="email">
                            <label class="label">E-mail</label><br />
                            <input class="input" type="email" autoComplete="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='example@gmail.com' required></input>
                            {/* <input type="email" autoComplete="email" required></input> */}

                        </div>

                        <div id="password">
                            <label class="label">Password</label><br />
                            <input class="input" type="password" autoComplete="current-password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='*****' required></input>
                            {/* <input type="password" autoComplete="current-password" required></input> */}
                        </div>

                        {/* {
                            errorMessage && (<span>{errorMessage}</span>)
                        } */}
                        <button id='submit'>
                        </button>
                        
                    </form>
            </div>
    )
}

export default Login;