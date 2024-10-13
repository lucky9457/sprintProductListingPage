import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css"

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();





    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res => {

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(json => {
                if (json.token) {

                    setToken(json.token);
                    localStorage.setItem("token", json.token);
                    navigate("/");
                } else {

                    setError("Invalid username or password. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                setError("Something went wrong. Please try again later.");
            });
    };

    return (
        <div className="mainlogin">



            <h2>Login</h2>
            <form className="logincard" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="loginbutton" type="submit">Login</button>
            </form>
            <p>test login:<br />
                Username: mor_2314<br />
                Password: 83r5^_</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {token && <p>Your token: {token}</p>}
        </div>

    );
};

export default Signin;
