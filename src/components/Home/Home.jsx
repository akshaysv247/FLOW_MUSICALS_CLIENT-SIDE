import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './Home.css';
import Player from '../Player/Player';
import MainContent from '../Content/MainContent';

function Home() {
  return (
    <div className="w-screen h-screen grid grid-cols-2 relative bg-black overflow-hidden">
      <div className=" w-full h-full p-3 absolute hidden sm:block">
        <Sidebar />
      </div>
      <div className="w-full absolute mt-3 ml-3">
        <Header />
      </div>
      <div className="absolute mt-24 sm:mt-28 m sm:ml-72 w-full h-full"><MainContent /></div>
      <div className="flex items-end w-screen my-2 mx-3 mr-3">
        <Player />
      </div>
    </div>
  );
}

export default Home;
