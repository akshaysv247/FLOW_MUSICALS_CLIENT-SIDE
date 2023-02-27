/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  artist: null,
  name: null,
  artistToken: null,
};

export const ArtistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setArtistLogin: (state, action) => {
      state.artist = action.payload.artist;
      state.name = action.payload.name;
      state.artistToken = action.payload.artistToken;
    },
    setArtistLogout: (state, action) => {
      state.artist = null;
      state.name = null;
      state.artistToken = null;
    },
  },
});

export const { setArtistLogin, setArtistLogout } = ArtistSlice.actions;
export default ArtistSlice.reducer;
