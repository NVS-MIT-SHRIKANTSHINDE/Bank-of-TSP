import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionHistory = () => {
    const [accountId, setAccountId] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchTransactionHistory = async () => {
        try {
            const response = await fetch(`http://localhost:8084/history/${accountId}`);
            const data = await response.json();

            if (response.ok) {
                setTransactions(data);
                setErrorMessage('');
            } else {
                setErrorMessage('Failed to fetch transaction history. Please try again.');
            }
        } catch (error) {
            console.error('Error fetching transaction history:', error);
            setErrorMessage('Failed to fetch transaction history. Please try again.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchTransactionHistory();
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Transaction History</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="accountId" className="form-label">Account ID</label>
                            <input
                                type="text"
                                id="accountId"
                                value={accountId}
                                onChange={(e) => setAccountId(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Get History</button>
                    </form>
                    {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                    {transactions.length > 0 && (
                        <div className="mt-4">
                            <h4 className="mb-3">Transactions:</h4>
                            <ul className="list-group">
                                {transactions.map((transaction, index) => (
                                    <li key={index} className="list-group-item">
                                        <p><strong>Transaction ID:</strong> {transaction.transactionId}</p>
                                        <p><strong>Date:</strong> {transaction.transactionDate}</p>
                                        <p><strong>Description:</strong> {transaction.description}</p>
                                        <p><strong>Status:</strong> {transaction.status}</p>
                                        <p><strong>Amount:</strong> Rs {transaction.amount}</p>
                                        <p><strong>From Account:</strong> {transaction.fromAccount}</p>
                                        <p><strong>To Account:</strong> {transaction.toAccount}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
