import React from 'react';
import './loginFormStyle.css';
import GoogleLoginButton from '../GoogleLogin/GoogleLoginButton';

export default function Login() {
    return (
        <>
        <br />
        <GoogleLoginButton text="Log In with Google" />
        <p id="or"><span>or</span></p>
        <p>Log in with your email address</p>
            <form>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
            </form>

            <div className="container">
                <button className="item">Login</button>
                <em>Don't have an account yet?</em>
                <a href="/signup"><button className="item">Create New Account</button></a>
            </div>


            {/* <form>
            <input type="text" placeholder="email"></input>
            <input type="text" placeholder="password"></input>
        </form>
        <div className="container">
        <a href="/loggedInTrue"><button className="item">Login</button></a>
        <GoogleLoginButton text="Log In with Google"/>
        <em>Don't have an account yet?</em>
        <a href="/signup"><button className="item">Create New Account</button></a>
        </div> */}

        </>
    )
}