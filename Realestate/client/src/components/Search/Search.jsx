// src/Search.js
import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

 function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <form onSubmit={handleSubmit} className='bg-slate-100 py-1 px-3 rounded-lg flex items-center'>
      <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-20 sm:w-64 text-black' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
      <button>
      <FaSearch className='text-slate-600' />
      </button>
    </form>
  );
}

export default Search;