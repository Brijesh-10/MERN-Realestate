
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      setTimeout(() => { setError(null); }, 2000);
      } else{
        setSuccess(data.message);   
        setTimeout(() => { setSuccess(null);
         }, 4000);
        
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-blue-600 sm:hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://images.pexels.com/photos/2455398/pexels-photo-2455398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex">
        <div className="w-full h-100 my-[25%]">
          <h1 className="text-xl font-bold">Forgot Password!</h1>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-blue-900">Don't worry, we will help</h1>

          <form className="mt-7" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                onChange={handleChange}
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                id='email'
                autoFocus
                required
              />
            </div>
            <button className="w-full block bg-black transition transform hover:scale-95 hover:text-md text-white font-semibold rounded-lg px-4 py-3 mt-6 ">
              Submit
            </button>
          </form>

          {error && <p className="mt-4 text-red-500">{error}</p>}
          {success && <p className="mt-4 text-green-500">{success}</p>}

          <p className="text-sm text-gray-500 mt-12">&copy; 2020 Abstract UI - All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
