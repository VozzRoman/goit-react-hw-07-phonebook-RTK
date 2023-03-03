import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice/slice';
import { contactsReducer } from './cotactsSlice/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});
