import React from 'react';
import './BannerItem.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const BannerItem = ({ slide }) => {
    const { image, prev, next, id } = slide;

    return (
        <div id={`slide${id}`} className='carousel-item relative w-full'>
            <div className='banner-img'>
                <img
                    src={image}
                    alt={`slide${id}`}
                    className='w-full rounded-xl'
                />
            </div>
            <div className='absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4'>
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Service
                </h1>
            </div>
            <div className='absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-1/2'>
                <p className='text-white text-xl'>
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                </p>
            </div>
            <div className='absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4'>
                <button className='my-btn btn mr-5'>Discover More</button>
                <button className='my-btn-2 btn btn-outline'>
                    Latest Project
                </button>
            </div>
            <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                <a href={`#slide${prev}`} className='btn btn-circle mr-5'>
                    <FaArrowLeft className=''></FaArrowLeft>
                </a>
                <a href={`#slide${next}`} className='btn btn-circle'>
                    <FaArrowRight></FaArrowRight>
                </a>
            </div>
        </div>
    );
};

export default BannerItem;
