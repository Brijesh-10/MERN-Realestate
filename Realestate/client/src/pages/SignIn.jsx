import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    // <div className='p-3 max-w-lg mx-auto'>
    //   <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
    //   <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
    //     <input
    //       type='email'
    //       placeholder='email'
    //       className='border p-3 rounded-lg'
    //       id='email'
    //       onChange={handleChange}
    //     />
    //     <input
    //       type='password'
    //       placeholder='password'
    //       className='border p-3 rounded-lg'
    //       id='password'
    //       onChange={handleChange}
    //     />

    //     <button
    //       disabled={loading}
    //       className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
    //     >
    //       {loading ? 'Loading...' : 'Sign In'}
    //     </button>
    //     <OAuth/>
    //   </form>
    //   <div className='flex gap-2 mt-5'>
    //     <p>Dont have an account?</p>
    //     <Link to={'/sign-up'}>
    //       <span className='text-blue-700'>Sign up</span>
    //     </Link>
    //   </div>
    //   {error && <p className='text-red-500 mt-5'>{error}</p>}
    // </div>
    // src/LoginComponent.js



    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=100"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl font-bold">Abstract UI</h1>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" id='email' onChange={handleChange}
                autoFocus
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" id='password' onChange={handleChange}
                required
              />
            </div>

            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
            </div>

            <button disabled={loading} className="w-full block bg-black hover:opacity-95 disabled:opacity-80 focus:bg-gray-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
              {loading ? 'Loading...' : 'Log In'}
            </button>
            {error && <p className='text-blue-500 mt-5'>{error}</p>}
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <OAuth />

          <p className="mt-8">Need an account? <Link to={'/sign-up'} className="text-blue-500 hover:text-blue-700 font-semibold" >Create an account</Link></p>
          <p className="text-sm text-gray-500 mt-12">&copy; 2020 Abstract UI - All Rights Reserved.</p>
        </div>
      </div>
    </section>

  );
}

