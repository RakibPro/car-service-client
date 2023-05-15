import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
            <figure>
                <img src={img} alt='Service Photo' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title text-2xl text-gray-600'>{title}!</h2>
                <div className='card-actions justify-between'>
                    <div className='pt-2'>
                        <p
                            className='text-xl font-bold'
                            style={{ color: 'var(--primary-color)' }}
                        >
                            Price: ${price}
                        </p>
                    </div>
                    <div>
                        <Link to={`/checkout/${_id}`}>
                            <button
                                className='btn btn-outline btn-error border-none bg-transparent'
                                style={{
                                    color: 'var(--primary-color)',
                                }}
                            >
                                <FaArrowRight className='hover:text-white'></FaArrowRight>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
