import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');

    const handleSignup = () => {
        if (password !== confirmPassword) {
            setPasswordMatchError("Passwords don't match");
            return;
        }
        // Handle signup logic here
        console.log('Signing up...', firstName, lastName, email, password);
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
                                Create Your Account
                            </h1>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <div className="mb-5">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        setPasswordMatchError('');
                                    }}
                                    className={`bg-gray-100 border border-gray-300 rounded-md p-2 w-full ${passwordMatchError && 'border-red-500'}`}
                                />
                                {passwordMatchError && <p className="text-red-500 text-sm mt-1">{passwordMatchError}</p>}
                            </div>
                            <button onClick={handleSignup} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800">
                                Sign Up
                            </button>
                            <div className="mt-3 text-gray-500">
                                Already have an account? <Link to="/login" className="text-blue-900">Log in here</Link>
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

export default SignupPage;
