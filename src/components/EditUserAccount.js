    import React, { useState, useEffect } from 'react';

    const EditUserAccount = () => {
        const [customerId, setCustomerId] = useState(localStorage.getItem('userId') || '');
        const [editedUserData, setEditedUserData] = useState(null);
        const [formData, setFormData] = useState({
            name: '',
            phone: '',
            email: '',
            address: '',
            password: ''
        });
        const [errorMessage, setErrorMessage] = useState('');

        // Function to fetch user data from API based on customer ID
        const fetchUserData = async () => {
            try {
                // Fetch user data from API based on customer ID
                const response = await fetch(`http://localhost:8082/customer/${customerId}`);
                const userData = await response.json();

                // Set user data in state
                setEditedUserData(userData);
                setFormData(userData); // Populate form fields with existing data
                setErrorMessage('');
            } catch (error) {
                console.error('Error fetching user data:', error);
                setEditedUserData(null);
                setErrorMessage('Error fetching user data. Please try again.');
            }
        };

        // Function to handle form submission for editing account
        const handleEditAccount = async () => {
            try {
                // Perform account edit logic here
                // Assuming you're sending a PUT request with updated data
                const response = await fetch(`http://localhost:8084/customer/${customerId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (!response.ok) {
                    throw new Error('Failed to edit account');
                }
                // Clear form fields after successful submission
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    password: ''
                });
                setErrorMessage('');
            } catch (error) {
                console.error('Error editing user account:', error);
                setErrorMessage('Failed to edit account. Please try again.');
            }
            console.log("DOne");
        };

        // Function to handle changes in form fields
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        useEffect(() => {
            // Fetch user data when component mounts
            fetchUserData();
        }, [customerId]); // Fetch data whenever customerId changes

        return (
            <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
                <h2 className="text-xl font-semibold mb-6">Edit User Account</h2>
                {editedUserData && (
                    <div>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-600">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-600">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-600">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-600">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-600">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                            />
                        </div>
                        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                        <button onClick={handleEditAccount} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 w-full">
                            Edit Account
                        </button>
                    </div>
                )}
            </div>
        );
    };

    export default EditUserAccount;
