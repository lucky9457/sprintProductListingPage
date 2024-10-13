import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner"; // Importing spinner
import "./Signin.css";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true); // Start loading

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
            })
            .finally(() => {
                setLoading(false); // Stop loading
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
                    disabled={loading} // Disable input while loading
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading} // Disable input while loading
                />
                <br />
                <button
                    className="loginbutton"
                    type="submit"
                    disabled={loading} // Disable button while loading
                >
                    {loading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="20"
                            visible={true}
                        />
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
            <p>Test login:<br />
                Username: mor_2314<br />
                Password: 83r5^_
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {token && <p>Your token: {token}</p>}
        </div>
    );
};

export default Signin;
