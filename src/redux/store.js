import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice/slice';
// import { contactsReducer } from './cotactsSlice/slice';
import { contactsApi } from './cotactsSlice/slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
	   // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.

    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => 
  [
 ...getDefaultMiddleware(),
 contactsApi.middleware,
],
});
