import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AdminSidebar from '../Sidebar/AdminSidebar';
import axios from '../../Axios/Axios';

function songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const getAllSongs = async () => {
      await axios.get('/admin/getAllSongs').then((response) => {
        console.log(response);
        const result = response.data;
        if (result.success) {
          console.log(result.songs);
          setSongs(result.songs);
        }
      });
    };
    getAllSongs();
  }, []);
  return (
    <div className="w-screen h-screen bg-black flex relative">
      <div className="absolute m-3">
        <AdminSidebar />
      </div>
      <div className="w-100% sm:w-[80%] h-90vh absolute ml-0 sm:ml-72 my-3 bg-[#0b0b2ee3] text-white">
        <div className="flex justify-between">
          <h1 className="text-3xl m-8 font-extrabold">SONGS</h1>
          <Link to="/admin/home">
            <p className="m-12">HOME</p>
          </Link>
        </div>
        <div className="grid gap-9">
          <div className="w-[98%] flex p-3 m-3 border border-[#15157e] h-96 overflow-auto">
            { songs.map((song) => (
              <div className="w-28 h-36 border border-[#15157e] bg-[#02020c]">
                <img src={song.imgURL} alt="img" className="h-24 w-28" />
                <div>
                  <h1>{song.name}</h1>
                  <p>{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/admin/addTrack">
              <Button>ADD TRACK</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default songs;
