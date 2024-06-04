import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransferDetails = () => {
    const location = useLocation();
    const transferDetails = location.state;

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card" style={{ maxWidth: '600px', width: '100%' }}>
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Transfer Details</h2>
                </div>
                <div className="card-body">
                    {transferDetails ? (
                        <div>
                            <p><strong>Transaction ID:</strong> {transferDetails.transactionId}</p>
                            <p><strong>Transaction Date:</strong> {transferDetails.transactionDate}</p>
                            <p><strong>Description:</strong> {transferDetails.description}</p>
                            <p><strong>Status:</strong> {transferDetails.status}</p>
                            <p><strong>Amount:</strong> Rs {transferDetails.amount}</p>
                            <p><strong>From Account:</strong> {transferDetails.fromAccount}</p>
                            <p><strong>To Account:</strong> {transferDetails.toAccount}</p>
                        </div>
                    ) : (
                        <p>No transfer details available.</p>
                    )}
                </div>
                <div className="card-footer text-right">
                    <button className="btn btn-primary" onClick={() => window.history.back()}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default TransferDetails;
