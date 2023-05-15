import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/services';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className='text-center'>
            <p className='text-2xl mt-5 font-bold' style={{ color: '#ff3811' }}>
                Services
            </p>
            <h1
                className='text-5xl py-5 font-bold'
                style={{ color: 'var(--title-color)' }}
            >
                Our Service Area
            </h1>
            <p className='py-6 mx-auto w-1/2 text-gray-500'>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
            </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {services.map((service) => (
                    <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
