import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            message,
        };

        if (phone.length < 4) {
            toast.error(
                'Phone number must be contained 11 character or longer',
                {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                }
            );
        } else {
            const url = 'http://localhost:5000/orders';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('Success:', data);
                    if (data.acknowledged) {
                        toast.success('Your Order Placed', {
                            position: 'top-center',
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                        form.reset();
                    }
                });
        }
    };

    return (
        <div>
            <ToastContainer
                position='top-center'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl pt-5'>
                    Your are about to order : {title}
                </h2>
                <h4 className='text-3xl my-5'>Price : ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input
                        name='firstName'
                        type='text'
                        placeholder='First Name'
                        className='input input-bordered w-full'
                    />
                    <input
                        name='lastName'
                        type='text'
                        placeholder='Last Name'
                        className='input input-bordered w-full'
                    />
                    <input
                        name='phone'
                        type='text'
                        placeholder='Your Phone'
                        className='input input-bordered w-full'
                        required
                    />
                    <input
                        name='email'
                        type='text'
                        placeholder='Your Email'
                        defaultValue={user?.email}
                        className='input input-bordered w-full'
                        readOnly
                    />
                </div>
                <div>
                    <textarea
                        name='message'
                        className='textarea textarea-bordered textarea-lg w-full my-5'
                        placeholder='Your Message'
                        required
                    ></textarea>
                </div>

                <input
                    className='my-btn btn w-3/4 mx-auto flex mb-10'
                    type='submit'
                    value='order confirm'
                />
            </form>
        </div>
    );
};

export default Checkout;
