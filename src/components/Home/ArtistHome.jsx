import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

function ArtistHome() {
  return (
    <div className="w-screen h-screen grid grid-cols-2 relative bg-hero-1">
      <div className="w-full h-full ml-10 p3 absolute">
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default ArtistHome;
