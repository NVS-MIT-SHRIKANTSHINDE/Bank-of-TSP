import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar'; // Assuming you have a NavBar component
import AddUserAccount from '../components/AddUserAccount';
import DeleteUserAccount from '../components/DeleteUserAccount';
import SearchUserAccount from '../components/SearchUserAccount';
import EditUserAccount from '../components/EditUserAccount';

const DashboardAdmin = () => {
    return (
        <div>
            <NavBar />
            <div className="container mx-auto">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="text-3xl font-bold text-center mt-8 mb-4">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/add-user-account">
                        <div className="hover:bg-gray-100 rounded-md p-4 border border-gray-300">
                            <h2 className="text-lg font-semibold mb-2">Add User Account</h2>
                            <p className="text-gray-600">Click here to add a new user account.</p>
                        </div>
                    </Link>
                    <Link to="/delete-user-account">
                        <div className="hover:bg-gray-100 rounded-md p-4 border border-gray-300">
                            <h2 className="text-lg font-semibold mb-2">Delete User Account</h2>
                            <p className="text-gray-600">Click here to delete a user account.</p>
                        </div>
                    </Link>
                    <Link to="/search-user-account">
                        <div className="hover:bg-gray-100 rounded-md p-4 border border-gray-300">
                            <h2 className="text-lg font-semibold mb-2">Search User Account</h2>
                            <p className="text-gray-600">Click here to search for a user account.</p>
                        </div>
                    </Link>
                    <Link to="/edit-user-account">
                        <div className="hover:bg-gray-100 rounded-md p-4 border border-gray-300">
                            <h2 className="text-lg font-semibold mb-2">Edit User Account</h2>
                            <p className="text-gray-600">Click here to edit a user account.</p>
                        </div>
                    </Link>
                    {/* Add more admin dashboard components here */}
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
