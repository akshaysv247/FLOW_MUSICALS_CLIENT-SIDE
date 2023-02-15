import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className="w-[95%] sm:w-[1250px] h-20 border-2 border-white bg-[#49154e1b] text-white flex items-center ml-0 sm:ml-64">
      <div className="w-20 h-12 bg-white hidden sm:block ml-10 rounded-lg">
        <div className="flex justify-center mt-3">
          <HomeIcon sx={{ color: 'black' }} />
        </div>
      </div>
      <div className="ml-2 w-[85%] sm:ml-20 sm:w-96">
        <div className="bg-[#540d3b5c] w-96 h-10 p-2 flex items-center rounded-lg border-2">
          <SearchIcon />
          <input className="m-6 font-thin text-white border-none bg-[#540d3b5c] rounded-lg w-96" placeholder="Find your Jam" />
          <button className="w-28 h-8 bg-transparent border-2 border-white rounded-xl flex items-center justify-center hover:bg-black hover:text-white" type="button">Search</button>
        </div>
      </div>
      <div className=" ml-2 sm:ml-[40%]">
        <Avatar />
      </div>
      <div className="hidden md:block">
        <p className="font-semibold">Username</p>
      </div>
    </div>
  );
}

export default Header;
