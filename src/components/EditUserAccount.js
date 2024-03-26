import React, { useState, useEffect } from 'react';

const EditUserAccount = () => {
    const [editedUserData, setEditedUserData] = useState({
        userId: '',
        username: '',
        password: '',
        email: '',
        address: '',
        aadharNumber: '',
        contactNumber: '',
        debitCardNumber: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    // Function to fetch user data from API
    const fetchUserData = async () => {
        try {
            // Fetch user data from API
            const response = await fetch('your_api_endpoint');
            const userData = await response.json();

            // Set user data in state
            setEditedUserData(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setErrorMessage('Error fetching user data. Please try again.');
        }
    };

    useEffect(() => {
        // Call fetchUserData function when component mounts
        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditAccount = () => {
        // Perform account edit logic here
        const { userId, username, password, email, address, aadharNumber, contactNumber, debitCardNumber } = editedUserData;
        
        if (!userId || !username || !password || !email || !address || !aadharNumber || !contactNumber || !debitCardNumber) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        // Assume account edit logic here
        console.log('Editing user account:', editedUserData);
        // Clear form fields after submission
        setEditedUserData({
            userId: '',
            username: '',
            password: '',
            email: '',
            address: '',
            aadharNumber: '',
            contactNumber: '',
            debitCardNumber: ''
        });
        setErrorMessage('');
    };

    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Edit User Account</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">User ID</label>
                <input
                    type="text"
                    name="userId"
                    value={editedUserData.userId}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Username</label>
                <input
                    type="text"
                    name="username"
                    value={editedUserData.username}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Password</label>
                <input
                    type="password"
                    name="password"
                    value={editedUserData.password}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Email</label>
                <input
                    type="email"
                    name="email"
                    value={editedUserData.email}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Address</label>
                <input
                    type="text"
                    name="address"
                    value={editedUserData.address}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Aadhar Number</label>
                <input
                    type="text"
                    name="aadharNumber"
                    value={editedUserData.aadharNumber}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Contact Number</label>
                <input
                    type="text"
                    name="contactNumber"
                    value={editedUserData.contactNumber}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Debit Card Number</label>
                <input
                    type="text"
                    name="debitCardNumber"
                    value={editedUserData.debitCardNumber}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <button onClick={handleEditAccount} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 w-full">
                Edit Account
            </button>
        </div>
    );
};

export default EditUserAccount;
