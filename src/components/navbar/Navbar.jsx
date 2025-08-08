import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import userImage from '../../assets/user.png';
import bellImg from '../../assets/bell.png';
import Logo from './logo';
import NavItems from './NavItems';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-white'>
            {/* Deskto Design */}
            <div className='hidden container mx-auto lg:flex justify-between items-center py-6 px-2'>
                {/* Left side */}
                <div>
                    <Logo></Logo>
                </div>
                {/* middle side */}
                <div>
                    <NavItems></NavItems>
                </div>
                {/* Right side */}
                <div className='flex gap-4 items-center'>
                    <img className='w-10 h-10' src={bellImg} alt="" />
                    <img className='w-10 h-10' src={userImage} alt="" />
                </div>
            </div>

            {/* Mobile Design */}
            <div className='lg:hidden flex items-center justify-between py-6 px-2'>
                {/* left side */}
                <div className='w-1/6'>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {
                            menuOpen ? <FiX size={24}></FiX> : <FiMenu size={24}></FiMenu>
                        }
                    </button>
                </div>
                {/* Middle side */}
                <div className='w-4/6 text-center'>
                    <Logo></Logo>
                </div>
                {/* Right side */}
                <div className='w-1/6 flex gap-3 justify-end items-center'>
                    <img className='w-10 h-10' src={bellImg} alt="" />
                    <img className='w-10 h-10' src={userImage} alt="" />
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`bg-black text-white p-4 transform transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <NavItems />
            </div>
        </nav>
    );
};

export default Navbar;