import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from 'react-redux';

import {
  Box, Menu, MenuItem, styled, Typography,
} from '@mui/material';
import { setLogout } from '../../Redux/Slice/UserSlice';
// import { setArtistLogout } from '../../Redux/Slice/ArtistSlice';
import Logo from '../Logo/Logo';

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

}));

function Header() {
  const { name } = useSelector((state) => state.user);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  // const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = () => { console.log('fasd'); };

  const handleLogout = () => {
    dispatch(setLogout());
    navigate('/');
  };
  return (
    <div className="w-full sm:w-full h-20 bg-[#240d42c4] text-white flex items-center">
      <div>
        <div className="hidden sm:block">
          <Logo />
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 sm:px-16">
        <div className="w-20 h-12 bg-white hidden sm:block  rounded-lg">
          <div className="flex justify-center mt-3">
            <HomeIcon sx={{ color: 'black' }} />
          </div>
        </div>
        <div className="w-[65%] sm:w-[500px]">
          <div className="bg-[#0301035c] w-[250px] sm:w-96 h-12 p-2 flex items-center rounded-lg">
            <form onSubmit={handleSearch} className="flex items-center">
              <SearchIcon />
              <input
                className="m-6 font-thin text-white bg-[#240d42c4] rounded-lg sm:w-60 w-28"
                placeholder="Find your Jam"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="w-fullbg-transparent rounded-xl flex items-center justify-center hover:bg-black hover:text-white" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div>
          <UserBox onClick={() => setOpen(true)}>
            <Avatar
              sx={{ width: '30px', height: '30px' }}
              src="https://w7..com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
            />
            <Typography varient="span">{name}</Typography>
          </UserBox>
          <Menu
            onClose={() => setOpen(false)}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
