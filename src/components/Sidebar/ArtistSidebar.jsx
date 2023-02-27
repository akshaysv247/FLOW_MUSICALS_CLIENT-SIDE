import React from 'react';
import { Link } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Person3Icon from '@mui/icons-material/Person3';
import LogoutIcon from '@mui/icons-material/Logout';
import ava from '../../Assets/Avatars/pexels-photo-1864653.webp';

function ArtistSidebar() {
  return (
    <div className="hidden sm:block w-64 h-[85%] bg-[#0a051dc2] text-white rounded-lg shadow-md shadow-black mt-20">
      <div className="grid justify-center block sm:hidden">
        <img src={ava} alt="ava" className="w-32 h-32 rounded-full" />
        <p className="text-center">Artist</p>
      </div>
      <div className="grid justify-between">
        <div className="flex ml-8 mt-10">
          <ul>
            <Link to="/admin/users">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <AccountBoxIcon />
                <span className="ml-4">FANS</span>
              </li>
            </Link>
            <Link to="/admin/artists">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <Person3Icon />
                <span className="ml-4">ARTISTS</span>
              </li>
            </Link>
            <Link to="/admin/library">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <LibraryMusicIcon />
                <span className="ml-4">LIBRARY</span>
              </li>
            </Link>
            <Link to="/admin/addTrack">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <AlbumIcon />
                <span className="ml-4">ADD TRACKS</span>
              </li>
            </Link>
            <Link to="/admin/createPlaylist">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <LibraryAddIcon />
                <span className="ml-4">CREATE PLAYLIST</span>
              </li>
            </Link>
            <Link to="/admin/copyrights">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <CopyrightIcon />
                <span className="ml-4">COPYRIGHTS</span>
              </li>
            </Link>
            <Link to="/artist/logout">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-[red]">
                <LogoutIcon />
                <span className="ml-4">LOG OUT</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArtistSidebar;
