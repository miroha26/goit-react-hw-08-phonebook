import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './ContactsOperations';

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    [fetchContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});
