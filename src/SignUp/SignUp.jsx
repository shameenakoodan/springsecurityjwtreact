import React, { useState } from 'react';

function SignUp({ onSignupSuccess }) {
    const [fullName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send signup request to backend using fetch
            const response = await fetch('http://localhost:8005/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    password
                })
            });

            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const data = await response.json();

            // Extract the JWT token from the response
            const token = data.token;

            // Store the token in localStorage for future use
            localStorage.setItem('token', token);

            // Call the parent component to handle post-signup actions
            onSignupSuccess(token);
        } catch (err) {
            // Handle error (e.g., username already taken, validation failed)
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignUp;
