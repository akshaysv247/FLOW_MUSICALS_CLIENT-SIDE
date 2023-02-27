import React from 'react';
import ArtistSidebar from '../Sidebar/ArtistSidebar';
import Header from '../Header/Header';

function ArtistHome() {
  return (
    <div className="w-screen h-screen grid relative bg-[#050514]">
      <div className="w-full h-full ml-3 ">
        <ArtistSidebar />
      </div>
      <div className="absolute w-full h-full">
        <Header />
      </div>
    </div>
  );
}

export default ArtistHome;
