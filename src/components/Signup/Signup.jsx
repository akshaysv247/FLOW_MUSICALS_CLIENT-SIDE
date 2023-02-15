import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { TextField } from '@mui/material';
import axios from '../../Axios/Axios';
import Logo from '../Logo/Logo2';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [ConformPassword, setConformPassword] = useState('');

  const [error, setError] = useState(null);

  const Navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    try {
      // console.log(name, email);
      // console.log('vannu');
      setError(null);
      axios.post('/userSignup', {
        name, email, phone, password,
      }).then((response) => {
        const result = response.data;
        if (result.success) {
          toast.success(result.message);
          toast('Please Login');
          Navigate('/');
        } else {
          setError(result.message);
        }
      });
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };
  return (
    <div className="w-screen h-screen grid grid-cols-2 bg-hero3">
      <div className="flex justify-center w-1/screen h-screen items-center">
        <Logo />
      </div>
      <div className="w-1/screen h-screen flex justify-center">
        <div className="w-[400px] h-[600px] bg-[#5408e17b] flex justify-center mt-20 rounded-lg shadow-lg shadow-[#b908e1fb] relative">
          <h3 className="absolute text-4xl text-white font-bold mt-8">
            Sign Up
          </h3>
          <form onSubmit={handleSignup} className="mt-20">
            <div className="w-full flex flex-col mt-5">
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <TextField
                id="standard-basic"
                label="Email Address"
                variant="standard"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <TextField
                id="standard-basic"
                label="Phone number"
                variant="standard"
                type="number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <TextField
                id="standard-basic"
                label="Conform Password"
                variant="standard"
                type="password"
                required
                value={ConformPassword}
                onChange={(e) => setConformPassword(e.target.value)}
                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              />
            </div>
            {error && <div className="text-[red]">{error}</div>}
            <div className="w-full flex flex-col my-4 mt-5">
              <button
                className="w-full text-[20px] font-semibold text-white bg-[#d036afb1] hover:shadow-lg shadow-[#070706ee] rounded-md p-2 text-center flex items-center justify-center border-2 border-black hover:bg-gray-900 hover:border-[#fff6fb9e]"
                type="submit"
              >
                Register
              </button>
              <Link to="/">
                <button
                  className="w-full text-black my-2 font-semibold bg-[#e82ca9bc] hover:bg-gray-900 hover:text-white hover:border-white hover:shadow-lg hover:shadow-black border-2 border-black rounded-md p-2 text-center"
                  type="button"
                >
                  Log in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
