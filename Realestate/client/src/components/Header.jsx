import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search.jsx';
import { useSelector } from 'react-redux';
import { AcmeLogo } from './AcmeLogo.jsx';
import { FaBars } from 'react-icons/fa';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { currentUser } = useSelector(state => state.user);

  return (
    <header className='bg-black text-white shadow-md fixed top-0 left-0 w-full z-10'>
      <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-4">
        <Link to='/'>
        <div className='flex items-center justify-center'>
        <AcmeLogo/> <p>Real State</p>
        </div>
        </Link>
        <div className='hidden md:flex'>
          <Search /> {/* Use the Search component */}
        </div>
        <div className='flex md:hidden items-center'>
          <Search /> {/* Use the Search component for mobile */}
          <button onClick={toggleMenu} className='ml-2 focus:outline-none'>
            {currentUser ? (
              <img src={currentUser.avatar} alt='profile' className='rounded-full h-7 w-7 object-cover' />
            ) : (
              <FaBars className=''/>
              )}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex md:gap-12 ${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}>
          <Link to='/' onClick={toggleMenu} className='py-4 md:py-0 text-center'>
            <li className='text-white text-base'>Home</li>
          </Link>
          <Link to='/About' onClick={toggleMenu} className='py-4 md:py-0 text-center'>
            <li className='text-white text-base'>About</li>
          </Link>
          <Link to='/profile' onClick={toggleMenu} className='py-4 md:py-0 text-center'>
            {currentUser ? (
              <>
                <span className='hidden md:block'>
                  <img src={currentUser.avatar} alt='profile' className='rounded-full h-7 w-7 object-cover' />
                </span>
                <span className='md:hidden'>
                  <li className='text-white text-base'>Profile</li>
                </span>
              </>
            ) : (
              <li className='text-white text-base'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
