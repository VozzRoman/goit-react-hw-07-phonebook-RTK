import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
	reducerPath: 'contacts',
	baseQuery: fetchBaseQuery({ 
		baseUrl: 'https://63ff6be2571200b7b7dd9c41.mockapi.io/api/v1/' }),
	tagTypes: ['Contacts'],
	endpoints: (builder) => ({
	  getContact: builder.query({
		 query: () => 'contacts',
		 providesTags: ['Contacts']
	  }),
	  addContact: builder.mutation({
		query: (data) => ({
			url: 'contacts',
			method: 'POST',
			body: {
				name: data.name,
				phone: data.phone,
			}
		}),
		invalidatesTags: ['Contacts']
	  }),
	  deleteContact: builder.mutation({
		query: (id) => ({
			url: `contacts/${id}`,
			method: 'DELETE',
		}),
		invalidatesTags: ['Contacts']
	  })
	}),
 })
 
 // Export hooks for usage in functional components, which are
 // auto-generated based on the defined endpoints
 //use GetContact Query
 export const { useGetContactQuery , useAddContactMutation, useDeleteContactMutation } = contactsApi;





// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContact,
//   deleteContact,
//   fetchContacts,
// } from 'redux/operations/operations';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: {
//     //fetchContacts
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.items = action.payload;
//       state.error = null;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//       //addContact
//     },
//     [addContact.pending](state) {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.unshift(action.payload);
//     },
//     [addContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     //deleteContact
//     [deleteContact.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
