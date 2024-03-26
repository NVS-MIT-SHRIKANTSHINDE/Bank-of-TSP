import React, { useState } from 'react';
import axios from 'axios';

const AddUserAccount = () => {
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddAccount = () => {
        // Perform account addition logic here
        const { name, phone, email, address } = userData;
        
        if (!name || !phone || !email || !address) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        // Post data to the API endpoint
        axios.post('http://localhost:8084/customer', userData)
            .then(response => {
                console.log('Account added successfully:', response.data);
                // Clear form fields after successful submission
                setUserData({
                    name: '',
                    phone: '',
                    email: '',
                    address: ''
                });
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error adding account:', error);
                setErrorMessage('Failed to add account. Please try again later.');
            });
    };

    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Add User Account</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Name</label>
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Email</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Address</label>
                <input
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <button onClick={handleAddAccount} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 w-full">
                Add Account
            </button>
        </div>
    );
};

export default AddUserAccount;
