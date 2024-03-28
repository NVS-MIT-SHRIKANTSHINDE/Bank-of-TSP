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
    const [signupError, setSignupError] = useState('');
    const [customerInfo, setCustomerInfo] = useState(null);
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerificationSent, setIsVerificationSent] = useState(false);

    const handleSignup = async () => {
        try {
            if (password !== confirmPassword) {
                setPasswordMatchError("Passwords don't match");
                return;
            }

            const userData = {
                name: `${firstName} ${lastName}`,
                email: email,
                password: password
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
            console.log(data);

            // Set verification code to '1234' for now
            setVerificationCode('1234');
        } catch (error) {
            console.error('Error signing up:', error);
            setSignupError('Error signing up. Please try again later.');
        }
    };

    const handleVerification = () => {
        // Implement verification code validation here
        // For simplicity, assume the verification code is correct
        // and proceed with signup
        console.log("done");
        setIsVerificationSent(true);
    };

    const handleResendVerification = () => {
        // Implement resend verification logic here
        setIsVerificationSent(true);
        setVerificationCode(''); // Clear previous code if any
        // Call API to resend verification email
    };

    return (
        <>
            <div className="hero" id='hero'>
                <NavBar />
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
                            {!isVerificationSent ? (
                                <button onClick={handleResendVerification} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800">
                                    Resend Verification
                                </button>
                            ) : (
                                <div className="mt-5">
                                    <p>An email with a verification code has been sent to {email}. Please check your email and enter the verification code below:</p>
                                    <input
                                        type="text"
                                        placeholder="Verification Code"
                                        value={verificationCode}
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                        className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full mt-2"
                                    />
                                    <button onClick={handleVerification} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 mt-3">
                                        Validate Verification Code
                                    </button>
                                </div>
                            )}
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
                            {signupError && <p className="text-red-500 text-sm mt-3">{signupError}</p>}
                            {customerInfo && (
                                <div className="mt-5">
                                    <h2 className="text-xl font-bold mb-2">Your Information:</h2>
                                    <p><strong>Name:</strong> {customerInfo.name}</p>
                                    <p><strong>Email:</strong> {customerInfo.email}</p>
                                    <p><strong>User ID:</strong> {customerInfo.customerId}</p>
                                    {/* Display other customer information as needed */}
                                </div>
                            )}
                            
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
