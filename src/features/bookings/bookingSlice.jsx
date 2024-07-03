import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookings: [],
  status: "idle",
  error: null,
};

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const response = await fetch(
      "https://carrent-b-715132b3d7ac.herokuapp.com/book/"
    );
    const data = await response.json();
    return data;
  }
);

export const addNewBooking = createAsyncThunk(
  "bookings/addNewBooking",
  async (formData) => {
    const response = await axios.post(
      "https://carrent-b-715132b3d7ac.herokuapp.com/book/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
);

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    bookingAdded: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = state.bookings.concat(action.payload);
      })
      .addCase(fetchBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
      });
  },
});

export const { bookingAdded } = bookingSlice.actions;

export default bookingSlice.reducer;
