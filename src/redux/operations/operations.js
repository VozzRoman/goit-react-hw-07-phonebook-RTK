import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63ff6be2571200b7b7dd9c41.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('contacts', { name, phone });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'delete/addContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${id}`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
		
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
