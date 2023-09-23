import { useState } from 'react';
import { FaLinkedin, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link, redirect, useNavigate } from 'react-router-dom';
import {loginAsync,logoutuser} from "../store/auth.js"
import { useDispatch } from 'react-redux';
const Login = () => {
  const [input, setInput] = useState({ email: '', password: '' })
  const [error, setError] = useState('');
  const dispatch=useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // localStorage.setItem('user',"true")

    if (!input.email || !input.password) {
      setError('Please fill in all fields.');
      setTimeout(() => {
        setError('');
      }, 2000)
    } else {
      // Perform your login logic here
      console.log("about to send req");
      try {
        dispatch(loginAsync(input))
        localStorage.setItem('user', true)
      }
      catch (err) {
        setTimeout(() => {
          setError('');
        }, 5000)
        setError('Server Error : ' + err.response.data.error);
      }
    }
  }
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="p-8 w-96  bg-white rounded shadow-md">
        <div className="flex justify-start mb-4">
          <img src={""} alt="" />
        </div>
        <div className="mb-4">
          <label className="block text-sm w-md text-left font-medium mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            name='email'
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-left font-medium mb-2 text-gray-700">
            Password
          </label>
          <input
            type="password"
            name='password'
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {error && <p className='text-red-600 p-2'>{error}</p>}
        <button
          type="button"
          onClick={(e) => handleSubmit(e)}
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-8"
        >
          Login Now
        </button>
        <div className="flex justify-center gap-8 mb-4">
          <FaGoogle className="w-8 h-8 text-red-600 mx-2 cursor-pointer" />
          <FaTwitter className="w-8 h-8 text-blue-400 mx-2 cursor-pointer" />
          <FaGithub className="w-8 h-8 text-gray-700 mx-2 cursor-pointer" />
        </div>

      </div>
    </div>
  );
};


export default Login;
