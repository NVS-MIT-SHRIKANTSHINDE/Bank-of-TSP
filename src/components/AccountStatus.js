import React from 'react';

const AccountStatus = ({ isAccountRegistered }) => {
    return (
        <div className="text-lg font-semibold">
            Your bank account is {isAccountRegistered ? 'registered' : 'not registered'}
        </div>
    );
}

export default AccountStatus;
