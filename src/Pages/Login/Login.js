import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((err) => console.error(err));
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
                                    name='email'
                                    placeholder='Your Email'
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
                                    type='password'
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
                                    value='Login'
                                />
                            </div>
                        </form>
                        <p className='text-center'>
                            New to Car Doctor?{' '}
                            <Link
                                to='/signup'
                                style={{ color: 'var(--primary-color)' }}
                            >
                                SignUp
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
