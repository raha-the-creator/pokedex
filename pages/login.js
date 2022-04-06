import Image from "next/image";
import { useState } from 'react';

export default function LogIn() {
    const [credentials, setCredentials] = useState("login");
    return (
        <div className="login">
            <div className="login-title">
                <div className="login-title-text-cont">
                    <h3 className="login-title-text">Welcome to</h3>
                    <h2 className="login-title-text">myPokedex</h2>
                </div>
                <Image src="/pokeball.png" alt="pokeball" width="200" height="200" />
            </div>
            {credentials === "login" &&
            <div className="login-credentials">
                <input id="email" type="email" placeholder="Email" required className="login-credentials-fields" />
                <input id="password" type="password" placeholder="Password" required className="login-credentials-fields" />
                <button type="button" className="login-credentials-buttons">Login</button>
                <button type="button" onClick={() => { setCredentials("signup") }} className="login-credentials-link">Don't have an account? Register here.</button>
            </div>
            }
            {credentials === "signup" &&
            <div className="login-credentials">
                <input id="username" type="text" placeholder="Username" required className="login-credentials-fields" />
                <input id="email" type="email" placeholder="Email" required className="login-credentials-fields" />
                <input id="password" type="password" placeholder="Password" required className="login-credentials-fields" />
                <button type="button" className="login-credentials-buttons">Register</button>
                <button type="button" onClick={() => { setCredentials("login") }} className="login-credentials-link">Have an account? Login here.</button>
            </div>
            }
            <div className="login-bottom-text">
                <div>All images and data gathered is</div>
                <div>used for educational purposes.</div>
            </div>
        </div>
    )
}