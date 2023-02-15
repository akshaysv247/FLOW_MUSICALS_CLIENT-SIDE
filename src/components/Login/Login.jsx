import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { toast } from 'react-hot-toast';
import axios from '../../Axios/Axios';
import Logo from '../Logo/Logo2';
import './Login.css';
// import {Form} from 'semantic-ui-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      console.log(email);
      console.log(password);
      setError(null);
      axios.post('/userLogin', { email, password }).then((response) => {
        const result = response.data;
        if (result.success) {
          localStorage.setItem('UserToken', result.data.data);
          toast.success(result.message);
          toast('Login Successful');
          Navigate('/home');
        } else {
          toast.error('Login Failed');
          setError(result.message);
        }
      });
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };
  return (
    <div className=" w-full min-h-screen flex items-start bg-hero2">
      <div className="relative w-1/2 h-screen flex flex-col">
        <div className="absolute top-[60px] left-[50px] flex flex-col">
          <Logo />
        </div>
        <div className="absolute top-[60%] left-[25%] flex flex-col">
          <h1 className=" text-2xl text-[#000000] font-extrabold">
            Get Into Flow Then Never Feel Low
          </h1>
        </div>
      </div>
      <div className="w-1/2 h-screen flex flex-col pt-[130px] ">
        <div className="w-full flex flex-col max-w-[450px] max-h-[500px] text-white bg-[#393da547] p-9 rounded-lg mt-5 ">
          <Avatar
            sx={{
              color: 'black',
              padding: '3px',
              marginLeft: '168px',
            }}
          />
          <div className="w-full flex flex-col mb-5">
            <h3 className="text-3xl font-semibold mb-4 text-center mt-4">
              Login
            </h3>
          </div>
          <form onSubmit={handleLogin}>
            <div className="w-full flex flex-col">
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
            <Link to="/artistLogin">
              <p className="text-black font-serif">Login as an ARTIST ?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
