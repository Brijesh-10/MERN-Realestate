// src/Search.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';

 function Search() {
  return (
    <form className='bg-slate-100 py-1 px-3 rounded-lg flex items-center'>
      <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-20 sm:w-64' />
      <FaSearch className='text-slate-600' />
    </form>
  );
}

export default Search;