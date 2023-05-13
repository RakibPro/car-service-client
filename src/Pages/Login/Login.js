import React from 'react';
import loginImg from '../../assets/images/login/login.svg';
const Login = () => {
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
                            Login
                        </h1>
                        <form onSubmit={handleLogin} className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text font-bold'>
                                        Email
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='email'
                                    className='input input-bordered'
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text font-bold'>
                                        Password
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='password'
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
                                    value='Login'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
