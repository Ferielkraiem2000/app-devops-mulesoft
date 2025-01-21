"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientOrdersPage: React.FC = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Assuming the token and customerId are stored in localStorage or cookies
        const token = localStorage.getItem('token') || '';  // Adjust based on where your token is stored
        const customerId = localStorage.getItem("customerId");  

        // Fetch client orders using axios
        const fetchClientOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/client-orders/${customerId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data.orders) {
                    setOrders(response.data.orders);
                } else {
                    setError('No orders found for this customer.');
                }
            } catch (err: any) {
                setError(err.message);
            }
        };

        if (customerId) {
            fetchClientOrders();
        } else {
            setError('No customer ID found.');
        }
    }, []); // Runs once when the component mounts

    return (
        <div>
            <h1>Client Orders</h1>
            {error && <p>{error}</p>}
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                            <p>Order ID: {order._id}</p>
                            <p>Status: {order.status}</p>
                            <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders to display.</p>
            )}
        </div>
    );
};

export default ClientOrdersPage;
