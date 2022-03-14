import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"


const useSimpleAuth = () => {
    const invalidDialog = useRef()
    const history = useHistory()
    const isAuthenticated = () => localStorage.getItem("hero_token") !== null
        || sessionStorage.getItem("hero_token") !== null

    const register = (user) => {
        return fetch(`http://localhost:8000/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(_ => _.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    console.log("look here")
                    localStorage.setItem("hero_token", res.token)
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    const login = (loginDetails) => {
        return fetch(`http://localhost:8000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginDetails.email,
                password: loginDetails.password
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    console.log("look here")
                    localStorage.setItem("hero_token", res.token)
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    const logout = () => {
        console.log("*** Toggling auth state and removing credentials ***")
        localStorage.removeItem("hero_token")
        sessionStorage.removeItem("hero_token")
    }

    const getCurrentUser = () => {
        const encoded = localStorage.getItem("hero_token")
        const unencoded = Buffer.from(encoded, "base64").toString("utf8")
        const parsed = JSON.parse(unencoded)
        const bare = Object.assign(Object.create(null), parsed)
        return bare
    }

    return { isAuthenticated, logout, login, register, getCurrentUser }
}

export default useSimpleAuth
