import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, password })
            });
            console.log(response.ok);
            if (response.ok==true) {
                

                // Save user ID in local storage
                localStorage.setItem('userId', userId);

                // Redirect to appropriate dashboard
                navigate('/dashboard-user');
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
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                Login to Your Account
                            </h1>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="User ID"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <button onClick={handleLogin} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800">
                                Login
                            </button>
                            {loginError && <p className="text-red-500 text-sm mt-1">{loginError}</p>}
                            <div className="mt-3 text-gray-500">
                                Don't have an account? <Link to="/signup" className="text-blue-900">Sign up here</Link>
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;
