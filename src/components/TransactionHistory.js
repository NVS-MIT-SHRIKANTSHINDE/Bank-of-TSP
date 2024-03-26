import React, { useState } from 'react';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, type: 'Withdrawal', sender: '1234567890', recipient: 'ATM', amount: 100 },
        { id: 2, type: 'Deposit', sender: 'Cash', recipient: '1234567890', amount: 200 },
        { id: 3, type: 'Transfer', sender: '1234567890', recipient: '9876543210', amount: 50 },
    ]);

    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Transaction History</h2>
            <div>
                {transactions.map(transaction => (
                    <div key={transaction.id} className="flex justify-between border-b border-gray-300 py-2">
                        <div>
                            <p><span className="font-semibold">Type:</span> {transaction.type}</p>
                            <p><span className="font-semibold">Sender Account:</span> {transaction.sender}</p>
                            <p><span className="font-semibold">Recipient Account:</span> {transaction.recipient}</p>
                        </div>
                        <p><span className="font-semibold">Amount:</span> ${transaction.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionHistory;
