import React, { useState } from "react"
import useSimpleAuth from "../../hooks/useSimpleAuth";
import { Link, useHistory } from "react-router-dom";
import "./Login.css"


const Login = () => {
    const [credentials, syncAuth] = useState({
        email: "",
        password: "",
        remember: false
    })
    const { login } = useSimpleAuth()
    const history = useHistory()

    // Simplistic handler for login submit
    const handleLogin = (e) => {
        e.preventDefault()
        const storage = credentials.remember ? localStorage : sessionStorage

        /*
            For now, just store the email and userName that
            the customer enters into local storage.
        */
        console.log("*** Initiate authentication ***")
        login(credentials)
            .then(success => {
                if (success) {
                    console.log("*** Rerouting to root URL ***")
                }
            })
    }

    const handleUserInput = (event) => {
        const copy = {...credentials}
        copy[event.target.id] = event.target.value
        syncAuth(copy)
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>HeroForge Reloaded</h1>
                    <h2 className="h3 mb-3 font-weight-normal">Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email" onChange={handleUserInput}
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password" onChange={handleUserInput}
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <input
                            onChange={
                                (event) => {
                                    const copy = {...credentials}
                                    if (event.target.value === "on") {
                                        copy.remember = true
                                    }
                                    else {
                                        copy.remember = false
                                    }
                                    syncAuth(copy)
                                }
                            }
                            defaultChecked={credentials.remember}
                            type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember"> Remember Me </label>
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                    </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
export default Login
