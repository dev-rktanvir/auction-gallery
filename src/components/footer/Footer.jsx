import React from 'react';
import Logo from '../navbar/logo';
import NavItems from '../navbar/NavItems';

const Footer = () => {
    return (
        <footer className='bg-white py-8 md:py-16 lg:py-24'>
            <div className='container mx-auto flex flex-col items-center px-4 text-center'>

                {/* Logo */}
                <Logo />

                {/* Tagline */}
                <ul className='mt-3 mb-5 flex flex-wrap justify-center gap-2 md:gap-4 text-lg md:text-xl font-medium'>
                    <li>Bid.</li>
                    <li>Win.</li>
                    <li>Own.</li>
                </ul>

                {/* Navigation Items */}
                <div className='mb-6'>
                    <NavItems />
                </div>

                {/* Copyright */}
                <p className='text-sm md:text-base text-gray-500'>
                    © 2025 AuctionHub. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
