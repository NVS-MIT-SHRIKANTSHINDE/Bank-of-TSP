import React, { useState } from 'react';

const WithdrawMoney = () => {
    const [amount, setAmount] = useState('');
    const [transactionPin, setTransactionPin] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleWithdraw = () => {
        // Perform withdrawal logic here
        if (!amount || isNaN(amount) || amount <= 0) {
            setErrorMessage('Please enter a valid amount.');
            return;
        }

        if (!transactionPin) {
            setErrorMessage('Please enter your transaction PIN.');
            return;
        }

        // Assume withdrawal logic here
        console.log('Withdrawing amount:', amount);
        setAmount('');
        setTransactionPin('');
    };

    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Withdraw Money</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Transaction PIN</label>
                <input
                    type="password"
                    value={transactionPin}
                    onChange={(e) => setTransactionPin(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <button onClick={handleWithdraw} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 w-full">
                Withdraw
            </button>
        </div>
    );
};

export default WithdrawMoney;
