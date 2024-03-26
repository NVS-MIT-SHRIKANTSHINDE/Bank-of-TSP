import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterBankAccount = () => {
    const [accountId, setAccountId] = useState('');
    const [pin, setPin] = useState('');
    const [userId, setUserId] = useState(''); // Define userId state
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Fetch the userId from local storage when the component mounts
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId); // Set the userId state with the value from local storage
        }
    }, []);

    const handleRegistration = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/accounts/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ accountId, pin, userId }) // Pass userId in the request body
            });
            console.log(accountId,pin,userId)
            if (response.ok) {
                localStorage.setItem('accountId', accountId);
                // Redirect to dashboard after successful registration
                navigate('/dashboard-user');
            } else {
                setErrorMessage('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            setErrorMessage('Registration failed. Please try again later.');
        }
    };

    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Register Bank Account</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Account ID</label>
                <input
                    type="text"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Transaction PIN</label>
                <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <button onClick={handleRegistration} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 w-full">
                Register Account
            </button>
        </div>
    );
};

export default RegisterBankAccount;
