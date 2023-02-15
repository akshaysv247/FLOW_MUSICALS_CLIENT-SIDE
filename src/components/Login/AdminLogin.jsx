import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from '../../Axios/Axios';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleAdminLogin = (e) => {
    e.preventDefault();
    try {
      setError(null);
      axios.post('/adminLogin', { email, password }).then((response) => {
        const result = response.data;
        if (result.success) {
          localStorage.setItem('AdminToken', response.data.token);
          Navigate('/adminHome');
        } else {
          setError(response.message);
        }
      });
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="w-8/12 h-[80%] bg-gray-900 rounded-lg flex p-4 text-white">
        <div className="w-1/2 h-full bg-hero3 rounded-r-3xl rounded-l-lg shadow-sm shadow-[#ff00a293]" />
        <div className="w-1/2 h-full flex justify-center p-5 shadow-md shadow-black rounded-lg mx-5 rounded-l-3xl">
          <div className="w-full h-full text-white p-2 ">
            <h2 className="font-semibold text-3xl text-center">LOGIN</h2>
            <form className="mt-10" onSubmit={handleAdminLogin}>
              <div className="p-3">
                <TextField
                  required
                  id="filled search"
                  label="Email Address"
                  variant="filled"
                  helperText="Enter your email address"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                />
              </div>
              <div className="p-3 mt-5">
                <TextField
                  required
                  id="standerd-password-input"
                  type="password"
                  label="Password"
                  variant="filled"
                  helperText="Enter your password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                />
              </div>
              { error && <div className="text-[red]">{ error }</div>}
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
