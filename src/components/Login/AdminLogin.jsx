import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAdminLogin } from '../../Redux/Slice/AdminSlice';
import axios from '../../Axios/Axios';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (email?.length === 0) {
      setEmailError('Please give a valid email');
    } else {
      setEmailError('');
    }
  };
  const validatePassword = () => {
    if (password?.length === 0) {
      setPasswordError('Please give a valid password');
    } else {
      setPasswordError('');
    }
  };
  useEffect(() => {
    validateEmail();
  }, [email]);
  useEffect(() => {
    validatePassword();
  }, [password]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    try {
      if (!emailError && !passwordError) {
        setError(null);
        axios.post('/admin/login', { email, password }).then((response) => {
          const result = response.data;
          console.log(result);
          if (result.success) {
            localStorage.setItem('adminToken', result.token);
            dispatch(
              setAdminLogin({
                admin: 'admin',
                name: result.name,
                adminToken: result.token,
              }),
            );
            Navigate('/admin/home');
          } else {
            setError(result.message);
          }
        });
      }
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="w-8/12 h-[80%] bg-gray-900 rounded-lg flex p-4 text-white">
        <div className="w-1/2 h-full bg-hero3 rounded-r-3xl rounded-l-lg shadow-sm shadow-[#ff00a293] hidden md:block" />
        <div className="sm:w-375 md:w-375 lg:w-1/2 max-h-[600px] sm:h-full flex justify-center shadow-md shadow-black rounded-lg rounded-l-3xl">
          <div className="w-full md:w-375 h-full text-white p-2 ">
            <h2 className="font-semibold text-3xl text-center">LOGIN</h2>
            <form className="mt-10" onSubmit={handleAdminLogin}>
              <div className="p-3">
                <TextField
                  id="filled search"
                  label="Email Address"
                  variant="filled"
                  helperText="Enter your email address"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                />
                {emailError && <span className="text-[red]">{emailError}</span>}
              </div>
              { error && <div className="text-[red]">{ error }</div>}
              <div className="p-3 mt-5">
                <TextField
                  id="standerd-password-input"
                  type="password"
                  label="Password"
                  variant="filled"
                  helperText="Enter your password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                />
                {passwordError && <span className="text-[red]">{passwordError}</span>}
              </div>
              <div className="flex justify-center mt-10">
                <button className="bg-[#bc1679] w-28 h-10 rounded-xl hover:shadow-xl hover:shadow-black hover:text-black" type="submit">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
