import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';
import Swal from 'sweetalert2';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);

    const handleUpdate = (id) => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'Approved' }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Success:', data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter((odr) => odr._id !== id);
                    const approving = orders.find((odr) => odr._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure, you want to delete your order?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete Order',
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/orders/${id}`;
                fetch(url, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'Your order has been deleted.',
                                'success'
                            );
                            const remaining = orders.filter(
                                (odr) => odr._id !== id
                            );
                            setOrders(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div>
            <h2 className='text-5xl text-center pb-5'>
                You have {orders.length} Order
            </h2>
            <div className='overflow-x-auto w-full'>
                <table className='table w-full'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <p>Delete</p>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></OrderRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
