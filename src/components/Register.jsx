import { useEffect, useState } from 'react';
import { FaLinkedin, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const [input, setInput] = useState({ name: '', email: '', password: '',url:'' })
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // localStorage.setItem('user',"true")

    if (!input.name || !input.email || !input.password) {
      setError('Please fill in all fields.');
      setTimeout(() => {
        setError('');
      }, 2000)
    } else {
      // Perform your login logic here
      console.log("about to send req");
      try {
        const res = await axios.post('http://localhost:3000/auth/register', input, {
          withCredentials: true,
        })

      }
      catch (err) {
        console.log(err.response.data);
        setError(err.response.data.error);
        setTimeout(() => {
          setError('');
        }, 5000)
      }
    }
  }
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded shadow-md">
        <div className="flex justify-start mb-4">
          <img src={""} alt="" />
        </div>
        <h2 className="text-xl text-left break-all mb-4">
          Join thousands of learners from around the world
        </h2>
        <p className="text-gray-600 mb-4 text-left">
          Start your learning journey with us and gain valuable  skills.
        </p>
        <div className="mb-4">
          <label className="block text-sm text-left font-medium mb-2 text-gray-700">
            Name
          </label>
          <input
            type="text"
            name='name'
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-left font-medium mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            name='email'
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* image uploader */}
        {/* <PhotoUpload setInput={setInput} /> */}
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
          Sign up
        </button>
        <div className="flex justify-center gap-8 mb-4">
          <FaGoogle className="w-8 h-8 text-red-600 mx-2 cursor-pointer" />
          <FaTwitter className="w-8 h-8 text-blue-400 mx-2 cursor-pointer" />
          <FaGithub className="w-8 h-8 text-gray-700 mx-2 cursor-pointer" />
        </div>
        <p className="text-gray-600">
          Already a member?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};


export default Register;
