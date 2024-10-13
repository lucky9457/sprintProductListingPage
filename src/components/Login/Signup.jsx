import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        city: '',
        street: '',
        zipcode: '',
        phone: ''
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        fetch('https://fakestoreapi.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                username: formData.username,
                password: formData.password,
                name: {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                },
                address: {
                    city: formData.city,
                    street: formData.street,
                    number: 3,
                    zipcode: formData.zipcode,
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496'
                    }
                },
                phone: formData.phone,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Signup failed. Please check the input or try again later.');
                }
            })
            .then((data) => {
                console.log(data);
                setSuccess(true);
                navigate('/signin');
            })
            .catch((error) => {
                console.error("Error:", error);
                setError(error.message || "An unexpected error occurred.");
            });
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="zipcode"
                    placeholder="Zipcode"
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>


            {error && <p style={{ color: 'red' }}>{error}</p>}


            {success && <p style={{ color: 'green' }}>Signup successful! Redirecting to SignIn...</p>}
        </div>
    );
};

export default SignUp;
