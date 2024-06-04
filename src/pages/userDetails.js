import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap'; // Import Bootstrap components

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8084/customer/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        if (userId) {
            fetchUserDetails();
        }
    }, [userId]);

    if (!user) {
        return <Container className="mt-4 text-center">Loading...</Container>;
    }

    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-center">User Details</h2>
            <Card>
                <Card.Body>
                    <p className="card-text"><strong>Name:</strong> {user.name}</p>
                    <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
                    <p className="card-text"><strong>Email:</strong> {user.email}</p>
                    <p className="card-text"><strong>Address:</strong> {user.address}</p>
                    <p className="card-text"><strong>Aadhar Number:</strong> {user.aadharNumber}</p>
                    <p className="card-text"><strong>Customer ID:</strong> {user.customerId}</p>
                    <p className="card-text"><strong>Account Creation Date:</strong> {user.accountCreationDate}</p>
                    <p className="card-text"><strong>Account Update Date:</strong> {user.accountUpdateDate}</p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserDetails;
