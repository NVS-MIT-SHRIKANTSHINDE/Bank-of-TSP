import React, { useState } from 'react';

const DepositMoney = () => {
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDeposit = () => {
        // Perform deposit logic here
        if (!amount || isNaN(amount) || amount <= 0) {
            setErrorMessage('Please enter a valid amount.');
            return;
        }
        // Assume deposit logic here
        console.log('Depositing amount:', amount);
        setAmount('');
    };

    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Deposit Money</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <button onClick={handleDeposit} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 w-full">
                Deposit
            </button>
        </div>
    );
};

export default DepositMoney;
