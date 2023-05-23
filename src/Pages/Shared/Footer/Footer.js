import React from 'react';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer
            className='footer p-10 w-full text-white'
            style={{ background: 'var(--title-color)' }}
        >
            <div>
                <img src={logo} alt='logo' />
                <p>
                    Car Doctor Ltd.
                    <br />
                    Providing Reliable Car Service 1992
                    <br />
                    &copy; Copyright 2023
                </p>
            </div>
            <div>
                <span className='footer-title'>Services</span>
                <a className='link link-hover'>Branding</a>
                <a className='link link-hover'>Design</a>
                <a className='link link-hover'>Marketing</a>
                <a className='link link-hover'>Advertisement</a>
            </div>
            <div>
                <span className='footer-title'>Company</span>
                <a className='link link-hover'>About us</a>
                <a className='link link-hover'>Contact</a>
                <a className='link link-hover'>Jobs</a>
                <a className='link link-hover'>Press kit</a>
            </div>
            <div>
                <span className='footer-title'>Legal</span>
                <a className='link link-hover'>Terms of use</a>
                <a className='link link-hover'>Privacy policy</a>
                <a className='link link-hover'>Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
