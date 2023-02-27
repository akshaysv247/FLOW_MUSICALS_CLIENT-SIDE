import React from 'react';
import { Link } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Person3Icon from '@mui/icons-material/Person3';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import Logo from '../Logo/Logo';
import ava from '../../Assets/Avatars/fan1.webp';

function AdminSidebar() {
  return (
    <div className="hidden sm:block w-64 h-90vh bg-[#1a0e50c2] text-white ">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="grid justify-center">
        <img src={ava} alt="ava" className="w-20 h-20 rounded-full" />
        <p className="text-center">Admin</p>
      </div>
      <div className="justify-between">
        <div className="flex ml-8">
          <ul>
            <Link to="/admin/users">
              <li className="font-medium mt-4 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <AccountBoxIcon />
                <span className="ml-3">USERS</span>
              </li>
            </Link>
            <Link to="/admin/artists">
              <li className="font-medium mt-4 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <Person3Icon />
                <span className="ml-3">ARTISTS</span>
              </li>
            </Link>
            <Link to="/admin/library">
              <li className="font-medium mt-4 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <LibraryMusicIcon />
                <span className="ml-3">LIBRARY</span>
              </li>
            </Link>
            <Link to="/admin/tracks">
              <li className="font-medium mt-4 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <AlbumIcon />
                <span className="ml-3">TRACKS</span>
              </li>
            </Link>
            <Link to="/admin/createPlaylist">
              <li className="font-medium mt-4 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <LibraryAddIcon />
                <span className="ml-3">PLAYLISTS</span>
              </li>
            </Link>
            <Link to="/admin/categories">
              <li className="font-medium mt-4 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <CategoryIcon />
                <span className="ml-3">CATEGORIES</span>
              </li>
            </Link>
            <Link to="/admin/copyrights">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-black">
                <CopyrightIcon />
                <span className="ml-3">COPYRIGHTS</span>
              </li>
            </Link>
            <Link to="/admin/logout">
              <li className="font-medium mt-2 hover:text-[#f76cebb0] hover:shadow-lg hover:shadow-[red]">
                <LogoutIcon />
                <span className="ml-3">LOG OUT</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
