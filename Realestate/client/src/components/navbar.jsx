// import React from 'react'
// import './navbar.css'
// import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//     //const [showSearch, setShowSearch] = useState(false);
//     return (
//         <>
//             <nav className='main-nav'>
//                 {/*  1st logo part */}
//                 <div className='logo'>
//                     <h2>
//                         <span>R</span>eal
//                         <span>S</span>tate
//                     </h2>
//                 </div>
//                 {/* 2nd menu part */}
//                 <div className="menu-link">
//                     <ul>
//                         {/* <Link to='/'>
//                             <li className='hidden sm:inline text-slate-700'>Home</li>
//                         </Link>
//                         <Link to='/sign-in'>
//                             <li className='text-slate-700'>Sign in</li>
//                         </Link>
//                         <Link to='/About'>
//                             <li className='hidden sm:inline text-slate-700'>About</li>
//                         </Link> */}
//                         <li>
//                             <a href="/">Home</a>
//                         </li>
//                         <li>
//                             <a href="/sign-in">Sign in</a>
//                         </li>
//                         <li>
//                             <a href="/About">About</a>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* 3rd part search bar */}
//                 <div className="right">
//                     {/* <div className="search">
//                         <input className="sbar" type='text' placeholder='Search...'/>
//                     </div> */}
//                     <div className="hamburger-menu">
//                         <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//                             <GiHamburgerMenu />
//                         </a>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }



// import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';

// import { NavLink } from 'react-router-dom';

// export default function Navbar() {
//     return (
//         <>
//             <nav className="main-nav">
//                 {/* 1st logo part */}
//                 <div className="logo">
//                     <h2 className="text-2xl font-normal uppercase">
//                         <span className="text-blue-500">R</span>eal
//                         <span className="text-blue-500">S</span>tate
//                     </h2>
//                 </div>
//                 {/* 2nd menu part */}
//                 <div className="menu-link flex justify-center items-center">
//                     <ul className="flex justify-around items-center">
//                         <li>
//                             <NavLink to="/" className="text-gray-700 hover:text-blue-500">
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/sign-in" className="text-gray-700 hover:text-blue-500">
//                                 Sign in
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about" className="text-gray-700 hover:text-blue-500">
//                                 About
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* 3rd part search bar */}
//                 <div className="right flex justify-end items-center">
//                     <div className="hamburger-menu text-gray-700 hover:text-blue-500 cursor-pointer">
//                         <GiHamburgerMenu />
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }
// import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';

// import { NavLink } from 'react-router-dom';

// export default function Navbar() {
//     return (
//         <>
//             <nav className="main-nav flex justify-between items-center">
//                 {/* 1st logo part */}
//                 <div className="logo">
//                     <h2 className="text-2xl  font-normal uppercase">
//                         <span className="text-blue-500">R</span>eal
//                         <span className="text-blue-500">S</span>tate
//                     </h2>
//                 </div>
//                 {/* 2nd menu part */}
//                 <div className="menu-link">
//                     <ul className="flex justify-around items-center">
//                         <li className="mr-4 sm:mr-8">
//                             <NavLink to="/" className="text-slate-700 hidden sm:inline">
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li className="mr-4 sm:mr-8">
//                             <NavLink to="/sign-in" className="text-slate-700">
//                                 Sign in
//                             </NavLink>
//                         </li>
//                         <li className="mr-4 sm:mr-8">
//                             <NavLink to="/about" className="text-slate-700 hidden sm:inline">
//                                 About
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* 3rd part search bar */}
//                 <div className="right flex justify-end items-center">
//                     <div className="search">
//                         <input className="sbar" type="text" placeholder="Search..." />
//                     </div>
//                     <div className="hamburger-menu ml-4">
//                         <a href="#" className="text-gray-700 hover:text-blue-500 cursor-pointer">
//                             <GiHamburgerMenu className="text-2xl" />
//                         </a>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }


import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="w-full h-24 grid grid-cols-2 md:grid-cols-5 gap-x-4 items-center">
                {/* 1st logo part */}
                <div className="col-span-1 md:col-span-2 flex justify-start items-center pl-20">
                    <h2 className="text-2xl font-normal uppercase">
                        <span className="text-blue-500">R</span>eal
                        <span className="text-blue-500">S</span>tate
                    </h2>
                </div>
                {/* 2nd menu part */}
                <div className="">
                    <ul className="">
                        <li className="">
                            <NavLink to="/" className="text-slate-700">
                                Home
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/sign-in" className="text-slate-700">
                                Sign in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="text-slate-700">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* 3rd part search bar */}
                <div className="">
                    <div className="">
                        <input className="sbar" type="text" placeholder="Search..." />
                    </div>
                    <div className="">
                        <a href="#" className="text-gray-700 hover:text-blue-500 cursor-pointer">
                            <GiHamburgerMenu className="text-2xl" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
