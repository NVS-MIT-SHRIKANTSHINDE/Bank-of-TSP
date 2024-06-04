import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';
import TransferMoney from '../components/TransferMoney'; // Import TransferMoney component

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!userId || !password) {
            setLoginError('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8084/customer/login/password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customerId: userId,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data) {
                    // Save user ID in local storage
                    localStorage.setItem('userId', userId);
                    // Redirect to appropriate dashboard
                    navigate('/dashboard-user');
                } else {
                    setLoginError('Invalid credentials. Please try again.');
                }
            } else {
                setLoginError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('Login failed. Please try again later.');
        }
    };

    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>

                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                        <div className="text-center">
                            <img src={heroImg} alt="card img" className="mx-auto w-32" />
                            <h1 className="mt-4 text-2xl font-semibold text-gray-800">Login to Your Account</h1>
                        </div>
                        <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="User ID"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="w-full px-3 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md"
                                />
                            </div>
                            <button onClick={handleLogin} className="w-full px-3 py-2 mt-4 text-white bg-blue-900 rounded-md hover:bg-blue-800">
                                Login
                            </button>
                            {loginError && <p className="mt-2 text-sm text-red-500">{loginError}</p>}
                            <div className="mt-4 text-gray-500 text-center">
                                Don't have an account? <Link to="/signup" className="text-blue-900">Sign up here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {userId && <TransferMoney loggedInUserId={userId} />} {/* Pass loggedInUserId to TransferMoney component */}
        </>
    );
}

export default LoginPage;
