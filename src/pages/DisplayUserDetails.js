import React from 'react';
import userDetails from './userDetails';

const DisplayUserDetails = () => {
    return (
        <div className="hero">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mt-8 mb-4">User Details</h2>
                <div className="m-auto overflow-hidden mx-4 p-2 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {userDetails.map(user => (
                            <div key={user.userId} className="user-item bg-white shadow-md rounded-md p-6">
                                <p><strong>User ID:</strong> {user.userId}</p>
                                <p><strong>Username:</strong> {user.username}</p>
                                <p><strong>Password:</strong> {user.password}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Address:</strong> {user.address}</p>
                                <p><strong>Aadhar Number:</strong> {user.aadharNumber}</p>
                                <p><strong>Contact Number:</strong> {user.contactNumber}</p>
                                <p><strong>Debit Card Number:</strong> {user.debitCardNumber}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayUserDetails;
