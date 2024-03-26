import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterBankAccount = () => {
    const [accountId, setAccountId] = useState('');
    const [pin, setPin] = useState('');
    const [userId, setUserId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    const handleRegistration = async () => {
        try {
            const response = await fetch('http://localhost:8084/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ accountId, transactionPin: pin })
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.customerId === userId) {
                    localStorage.setItem('accountId', accountId);
                    navigate('/dashboard-user');
                } else {
                    setErrorMessage('Invalid customer ID.');
                }
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
