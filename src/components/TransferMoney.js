import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransferMoney = ({ loggedInUserId }) => {
    const [senderAccount, setSenderAccount] = useState('');
    const [recipientAccount, setRecipientAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionPin, setTransactionPin] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleTransfer = async () => {
        try {
            const response = await fetch('http://localhost:8081/transaction/transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fromAccountId: senderAccount,
                    toAccountId: recipientAccount,
                    amount: amount,
                    transactionPin: transactionPin,
                    userId: loggedInUserId
                })
            });

            const data = await response.json();

            if (response.ok) {
                setErrorMessage('');
                navigate('/transfer-details', { state: data });
            } else {
                setErrorMessage('Failed to transfer money. Please try again.');
            }
        } catch (error) {
            console.error('Error transferring money:', error);
            setErrorMessage('Failed to transfer money. Please try again.');
        }
    };

    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Transfer Money</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Sender Account</label>
                <input
                    type="text"
                    value={senderAccount}
                    onChange={(e) => setSenderAccount(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-600">Recipient Account</label>
                <input
                    type="text"
                    value={recipientAccount}
                    onChange={(e) => setRecipientAccount(e.target.value)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
                />
            </div>
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
            <button onClick={handleTransfer} className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 w-full mb-4">
                Transfer
            </button>
        </div>
    );
};

export default TransferMoney;
