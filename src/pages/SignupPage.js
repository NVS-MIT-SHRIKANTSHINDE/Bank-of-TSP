import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [signupError, setSignupError] = useState('');
    const [customerInfo, setCustomerInfo] = useState(null);

    const handleSignup = async () => {
        try {
            if (password !== confirmPassword) {
                setPasswordMatchError("Passwords don't match");
                return;
            }

            const userData = {
                name: name,
                phone: phone,
                email: email,
                address: address,
                aadarNumber: aadharNumber,
                password: password,
                accountCreationDate: new Date().toISOString(),
                accountUpdateDate: new Date().toISOString()
            };

            const response = await fetch('http://localhost:8084/customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // Display customer information after successful signup
            setCustomerInfo(data);
        } catch (error) {
            console.error('Error signing up:', error);
            setSignupError('Error signing up. Please try again later.');
        }
    };

    return (
        <>
            <div className="hero" id='hero'>
                <NavBar />
                <div className="flex items-center justify-center h-screen bg-gray-100 mt-8">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg mt-8">
                        <div className="text-center">
                            <h1 className="mt-4 text-xl font-semibold text-blue-900">Create Your Account</h1>
                        </div>
                        <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full px-4 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Aadhar Number"
                                value={aadharNumber}
                                onChange={(e) => setAadharNumber(e.target.value)}
                                className="w-full px-4 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md text-sm"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md text-sm"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setPasswordMatchError('');
                                }}
                                className={`w-full px-4 py-2 mt-4 bg-gray-100 border border-gray-300 rounded-md text-sm ${passwordMatchError && 'border-red-500'}`}
                            />
                            {passwordMatchError && <p className="text-red-500 text-sm mt-1">{passwordMatchError}</p>}
                            <button onClick={handleSignup} className="w-full px-4 py-2 mt-4 text-white bg-blue-900 rounded-md hover:bg-blue-800">
                                Sign Up
                            </button>
                            {signupError && <p className="text-red-500 text-sm mt-3">{signupError}</p>}
                            {customerInfo && (
                                <div className="mt-5">
                                    <h2 className="text-xl font-bold mb-2">Your Information:</h2>
                                    <p><strong>CustomerId:</strong> {customerInfo.customerId}</p>
                                    <p><strong>Name:</strong> {customerInfo.name}</p>
                                    <p><strong>Email:</strong> {customerInfo.email}</p>
                                    {/* Display other customer information as needed */}
                                </div>
                            )}
                            <div className="mt-3 text-gray-500 text-center">
                                Already have an account? <Link to="/login" className="text-blue-900">Log in here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupPage;
