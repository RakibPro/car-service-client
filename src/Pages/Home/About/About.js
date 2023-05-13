import React from 'react';
import './About.css';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='hero my-28'>
            <div className='hero-content flex-col lg:flex-row'>
                <div className='relative w-1/2'>
                    <img
                        src={person}
                        alt='person photo'
                        className='rounded-lg w-4/5 h-full shadow-2xl'
                    />
                    <img
                        src={parts}
                        alt='parts photo'
                        className='absolute w-3/5 right-5 top-1/2 border-white border-8 rounded-lg'
                    />
                </div>
                <div className='w-1/2'>
                    <p
                        className='text-2xl mt-5 font-bold'
                        style={{ color: '#ff3811' }}
                    >
                        About Us
                    </p>
                    <h1
                        className='text-5xl py-5 font-bold '
                        style={{ color: '#151515' }}
                    >
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className='py-6 text-gray-500'>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                    </p>
                    <p className='pb-6 text-gray-500'>
                        the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look
                        even slightly believable.
                    </p>
                    <button className='my-btn btn border-none mt-6'>
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
