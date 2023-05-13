import React from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className='hero w-full my-20'>
            <div className='hero-content grid md:grid-cols-2 flex-col lg:flex-row'>
                <div className='w-3/4 lg:text-left'>
                    <img src={loginImg} alt='login image' />
                </div>
                <div className='flex justify-center'>
                    <div className='card border rounded-lg flex-shrink-0 w-full max-w-sm bg-base-100 py-10'>
                        <h1
                            className='text-5xl text-center font-bold'
                            style={{ color: 'var(--title-color)' }}
                        >
                            Sign Up
                        </h1>
                        <form onSubmit={handleLogin} className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text font-bold'>
                                        Name
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Your Name'
                                    className='input input-bordered'
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text font-bold'>
                                        Email
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    name='email'
                                    placeholder='Your Email'
                                    className='input input-bordered'
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text font-bold'>
                                        Confirm Password
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    name='password'
                                    placeholder='Your Password'
                                    className='input input-bordered'
                                />
                                <label className='label'>
                                    <a
                                        href='#'
                                        className='label-text-alt link link-hover'
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className='form-control mt-6'>
                                <input
                                    className='my-btn btn'
                                    type='submit'
                                    value='singup'
                                />
                            </div>
                        </form>
                        <p className='text-center'>
                            Already have an account?{' '}
                            <Link
                                to='/login'
                                style={{ color: 'var(--primary-color)' }}
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
