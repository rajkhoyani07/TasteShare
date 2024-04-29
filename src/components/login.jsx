import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login/signup logic here
    };

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="login-container">
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
            </form>
            <p onClick={toggleSignUp}>
                {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
            </p>
        </div>
    );
};

export default Login;