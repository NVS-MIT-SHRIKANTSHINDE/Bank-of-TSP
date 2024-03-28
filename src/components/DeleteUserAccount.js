import React, { useState } from 'react';
import axios from 'axios';

const DeleteUserAccount = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDeleteAccount = () => {
        // Perform account deletion logic here
       
        if (!accountNumber) {
            setErrorMessage('Please enter an account number.');
            return;
        }

        axios.delete(`http://localhost:8083/account/${accountNumber}`)
            .then(response => {
                console.log('Account deleted successfully:', response.data);
                setAccountNumber('');
            })
            .catch(error => {
                console.error('Error deleting account:', error);
                setErrorMessage('Error deleting account. Please try again later.');
            });
    };

    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Delete User Account</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Account Number</label>
                <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <button onClick={handleDeleteAccount} className="bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-800 w-full">
                Delete Account
            </button>
        </div>
    );
};

export default DeleteUserAccount;
