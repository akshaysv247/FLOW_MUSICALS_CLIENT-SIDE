/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../Redux/Slice/UserSlice';
import axios from '../../Axios/Axios';
import Logo from '../Logo/Logo2';
import './Login.css';
// import {Form} from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const Navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      setError(null);
      if (!emailError && !passwordError) {
        axios.post('/userLogin', { email, password }).then((response) => {
          const result = response.data;
          if (result.success) {
            localStorage.setItem('token', result.token);
            console.log(result);
            dispatch(
              setLogin({
                user: 'user',
                name: result.user.name,
                token: result.token,
              }),
            );
            toast.success(result.message);
            toast.success('Login Successful');
            Navigate('/home');
          } else {
            toast.error('Login Failed');
            setError(result.message);
          }
        });
      } else {
        setError('Please enter valid email and password');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };
  return (
    <div className=" w-full min-h-screen flex items-start bg-hero2">
      <div className="relative w-1/2 h-screen flex flex-col hidden sm:block">
        <div className="absolute top-[60px] left-[50px] flex flex-col">
          <Logo />
        </div>
        <div className="absolute top-[60%] left-[25%] flex flex-col">
          <h1 className=" text-2xl text-[#000000] font-extrabold">
            Get Into Flow Then Never Feel Low
          </h1>
        </div>
      </div>
      <div className="w-screen sm:w-6/12 h-screen flex justify-center items-center ">
        <div className="w-full flex flex-col max-w-[450px] min-w-[250px] h-500 text-white bg-[#393da547] p-9 rounded-lg m-5 ">
          <div className="flex w-full justify-center">
            <Avatar
              sx={{
                color: 'black',
                padding: '3px',
              }}
            />
          </div>
          <div className="w-full flex flex-col mb-5">
            <h3 className="text-3xl font-semibold mb-4 text-center mt-4">
              Login
            </h3>
          </div>
          <ToastContainer />
          <form onSubmit={handleLogin}>
            <div className="w-full flex flex-col">
              <TextField
                id="standard-basic"
                label="Email Address"
                variant="standard"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ input: { color: 'white' }, label: { color: 'white' } }}

              />
              {emailError && <span className="text-[red]">{emailError}</span>}
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              />
              {passwordError && <span className="text-[red]">{passwordError}</span>}
            </div>
            <div>{error && <p className="text-[red]">{error}</p>}</div>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center mt-5">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember Me</p>
              </div>
              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 mt-5">
                Forgot Password ?
              </p>
            </div>
            <div className="w-full flex flex-col my-4">
              <button className="w-full text-[20px] font-semibold text-white bg-[#e60c7d9e] hover:shadow-lg shadow-[#070706ee] rounded-md p-2 text-center flex items-center justify-center border-2 border-teal-500 hover:bg-teal-600 hover:border-[#e60c7d9e]" type="submit">
                Log in
              </button>
              <Link to="/signOps">
                <button
                  className="w-full text-white my-2 font-semibold bg-teal-600 hover:bg-[#e60c7d9e] hover:text-white hover:border-teal-600 hover:shadow-lg hover:shadow-black border-2 border-[#e60c7d9e] rounded-md p-2 text-center"
                  type="button"
                >
                  Register
                </button>
              </Link>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <Link to="/artist/login">
              <p className="text-black font-serif">Login as an ARTIST ?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
