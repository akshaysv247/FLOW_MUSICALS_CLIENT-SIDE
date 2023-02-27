import React from 'react';
import { NavLink } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FeedIcon from '@mui/icons-material/Feed';

function Sidebar() {
  return (
    <div className="w-64 h-[79%] bg-[#270d469c] text-white ">
      <div className="mt-2 justify-between">
        <div className="flex ml-5 pt-10">
          <ul>
            <NavLink to="/library">
              <li className="font-medium mt-2 hover:text-[#cc3bdabe] hover:shadow-lg hover:shadow-black ">
                <LibraryMusicIcon />
                LIBRARY
              </li>
            </NavLink>
            <li className="font-medium mt-2 hover:text-[#cc3bdabe] hover:shadow-lg hover:shadow-black">
              <HeartBrokenIcon />
              LIKED SONGS
            </li>
            <li className="font-medium mt-2 hover:text-[#cc3bdabe] hover:shadow-lg hover:shadow-black">
              <LibraryAddIcon />
              CREATE PLAYLIST
            </li>
            <li className="font-medium mt-2 hover:text-[#cc3bdabe] hover:shadow-lg hover:shadow-black">
              <FeedIcon />
              FEEDS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
