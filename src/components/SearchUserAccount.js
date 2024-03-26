import React, { useState } from 'react';

const SearchUserAccount = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async () => {
        if (!searchTerm) {
            setErrorMessage('Please enter a search term.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8084/customer/${searchTerm}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const userData = await response.json();
            setSearchResult([userData]);
            setErrorMessage('');
        } catch (error) {
            setSearchResult([]);
            setErrorMessage(error.message);
        }
    };

    const handleFetchAllUsers = async () => {
        try {
            const response = await fetch('http://localhost:8084/customer');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const usersData = await response.json();
            setSearchResult(usersData);
            setErrorMessage('');
        } catch (error) {
            setSearchResult([]);
            setErrorMessage(error.message);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8084/customer/${userId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            // Filter out the deleted user from searchResult
            setSearchResult(prevState => prevState.filter(user => user.customerId !== userId));
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="mt-8 max-w-full mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Search User Account</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Search Term</label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <button onClick={handleSearch} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 w-full mb-4">
                Search
            </button>
            <button onClick={handleFetchAllUsers} className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-800 w-full mb-4">
                Fetch All Users
            </button>
            {searchResult.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Search Result:</h3>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Address</th>
                                <th className="px-4 py-2">Actions</th> {/* Add Actions column */}
                            </tr>
                        </thead>
                        <tbody>
                            {searchResult.map(user => (
                                <tr key={user.customerId}>
                                    <td className="border px-4 py-2">{user.customerId}</td>
                                    <td className="border px-4 py-2">{user.name}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                    <td className="border px-4 py-2">{user.phone}</td>
                                    <td className="border px-4 py-2">{user.address}</td>
                                    <td className="border px-4 py-2">
                                        <button onClick={() => handleDeleteUser(user.customerId)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
    );
};

export default SearchUserAccount;
