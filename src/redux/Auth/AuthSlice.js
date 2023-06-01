import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, getUser } from './AuthOperations';
export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    error: null,
  },
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [signUp.rejected]: (state, action) => {
      state.error = action.payload;
    },

    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [signIn.rejected]: (state, action) => {
      state.error = action.payload;
    },

    [logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [logOut.rejected]: (state, action) => {
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
    [getUser.pending]: (state, action) => {
      state.isFetchingCurrentUser = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [getUser.rejected]: (state, action) => {
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
  },
});
