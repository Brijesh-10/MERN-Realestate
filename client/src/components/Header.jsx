import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className="flex justify-between items-center max-wl-5xl mx-auto p-3">
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Sahand</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700'>Home</li>
          </Link>
          <Link to='/sign-in'>
            <li className='text-slate-700'>Sign in</li>
          </Link>
          <Link to='/About'>
            <li className='hidden sm:inline text-slate-700'>About</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

//  hamburger icons

// import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className='bg-slate-100 shadow-md'>
//       <div className="flex justify-between items-center max-wl-5xl mx-auto p-3">
//         <Link to='/'>
//           <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
//             <span className='text-slate-500'>Sahand</span>
//             <span className='text-slate-700'>Estate</span>
//           </h1>
//         </Link>
//         <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
//           <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
//           <FaSearch className='text-slate-600'/>
//         </form>
//         <div className='md:hidden'>
//           {isMenuOpen ? (
//             <FaTimes className="text-slate-600 text-3xl" onClick={toggleMenu} />
//           ) : (
//             <FaBars className="text-slate-600 text-3xl" onClick={toggleMenu} />
//           )}
//         </div>
//         <ul className={`md:flex md:gap-4 ${isMenuOpen ? 'flex flex-col md:hidden' : 'hidden'}`}>
//           <Link to='/'>
//             <li className='text-slate-700 py-2'>Home</li>
//           </Link>
//           <Link to='/sign-in'>
//             <li className='text-slate-700 py-2'>Sign in</li>
//           </Link>
//           <Link to='/About'>
//             <li className='text-slate-700 py-2'>About</li>
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// }




