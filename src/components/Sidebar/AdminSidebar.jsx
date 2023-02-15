import React from 'react';

function AdminSidebar() {
  return (
    <div className="w-64 h-[90%] bg-[#49154e1b] text-white ">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-2 justify-between">
        <div className="flex ml-5">
          <ul>
            <li className="font-medium text-3 mt-2" onClick={handleLibrary}>
              <LibraryMusicIcon />
              LIBRARY
            </li>
            <li className="font-medium text-3 mt-2" onClick={handleLikedSongs}>
              <HeartBrokenIcon />
              LIKED SONGS
            </li>
            <li className="font-medium text-3 mt-2" onClick={handleCreatePlaylist}>
              <LibraryAddIcon />
              CREATE PLAYLIST
            </li>
            <li className="font-medium text-3 mt-2" onClick={handleFeeds}>
              <FeedIcon />
              FEEDS
            </li>
          </ul>
        </div>
        {/* <div className="flex justify-center mt-80">
          <p>Log out</p>
        </div> */}
      </div>
    </div>
  );
}

export default AdminSidebar;
