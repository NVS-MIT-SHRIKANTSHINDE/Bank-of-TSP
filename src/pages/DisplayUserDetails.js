import React from 'react';
import UserDetails from './userDetails'; // Update the import statement

const DisplayUserDetails = () => {
  return (
    <div className="hero">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mt-8 mb-4">User Details</h2>
        <div className="m-auto overflow-hidden mx-4 p-2 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Integrate UserDetails component */}
            <div className="user-item bg-white shadow-md rounded-md p-6">
              <UserDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUserDetails;
