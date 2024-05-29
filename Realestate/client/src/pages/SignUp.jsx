
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        setTimeout(()=>{setError(null);},2000);
        console.log(data);
        return;
      }
      // Sign-up successful, now sign in the user
      const signInRes = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const signInData = await signInRes.json();
      if (signInData.success === false) {
        setLoading(false);
        setError(signInData.message);
        return;
      }
      dispatch(signInSuccess(signInData));
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      if (error.statusCode === 500) {
        setError("User already exists");
      }
      console.log(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Name' className='border p-3 rounded-lg' id='username' required onChange={handleChange} />
        <input type='email' placeholder='Email' className='border p-3 rounded-lg' id='email' required onChange={handleChange} />
        <input type='password' placeholder='Password' className='border p-3 rounded-lg' id='password' required onChange={handleChange} />
        <button disabled={loading} className='bg-black text-white transition-transform transform hover:scale-95 hover:text-md p-3 rounded-lg uppercase disabled:opacity-90'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
