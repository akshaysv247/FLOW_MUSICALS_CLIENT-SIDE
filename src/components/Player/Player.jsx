import React from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import RepeatIcon from '@mui/icons-material/Repeat';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FeedIcon from '@mui/icons-material/Feed';

import songImg from '../../Assets/Avatars/artist2.jpeg';

function Player() {
  return (
    <div className="w-[98%]">
      <div className=" h-16 bg-[#1a0730ab] hidden sm:block">
        <div className="flex items-center">
          <div className="w-14">
            <img src={songImg} alt="" className="h-16 w-14" />
          </div>
          <p className="text-white mx-2">
            Song name
            <br />
            Artist name
          </p>
          <div className="mx-5">
            <FavoriteBorderIcon color="success" />
          </div>
          <div className="flex ml-96">
            <div className="mx-2">
              <ShuffleIcon color="success" fontSize="large" />
            </div>
            <div className="mx-2">
              <FastRewindIcon color="success" fontSize="large" />
            </div>
            <div className="mx-2">
              <PlayCircleFilledWhiteIcon color="success" fontSize="large" />
            </div>
            <div className="mx-2">
              <FastForwardIcon color="success" fontSize="large" />
            </div>
            <div className="mx-2">
              <RepeatIcon color="success" fontSize="large" />
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden w-[98%] border-2 border-white h-32">
        <div className="flex items-center">
          <div className="w-14">
            <img src={songImg} alt="" className="h-14 w-14" />
          </div>
          <div className="ml-2">
            <p className="text-white">
              SongName
              <br />
              ArtistName
            </p>
          </div>
          <div className="flex">
            <div className="mx-5">
              <FavoriteBorderIcon color="success" />
            </div>
            <div className="mx-2 flex justify-end ml-52">
              <PlayCircleFilledWhiteIcon color="success" fontSize="large" />
            </div>
          </div>
        </div>
        <div className="text-white flex border-t-2 bg-[#120524]">
          <div className="h-full flex mx-8 my-4">
            <FeedIcon fontSize="large" />
          </div>
          <div className="h-full flex mx-8 my-4">
            <LibraryAddIcon fontSize="large" />
          </div>
          <div className="h-full flex mx-8 my-4">
            <LibraryMusicIcon fontSize="large" />
          </div>
          <div className="h-full flex mx-8 my-4">
            <HeartBrokenIcon fontSize="large" />
          </div>
          <div className="h-full flex mx-8 my-4">
            <AccountBoxIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
