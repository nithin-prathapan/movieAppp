import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apikey=${apiKey}&s=${movieText}&type=movie`
    );
    console.log("the response is ", response);
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apikey=${apiKey}&s=${seriesText}&type=series`
    );
    console.log("the response is ", response);
    return response.data;
  }
);
export const fetchAsyncMoviesOrShows = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShows",
  async (id) => {
    const response = await movieApi.get(`?apikey=${apiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectedMoviesOrShow: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMoviesorShow: (state) => {
      state.selectedMoviesOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, selectedMoviesOrShow: payload };
    },
  },
});

export const { addMovies, removeSelectedMoviesorShow } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllmovies = (state) => state.movies.movies;
export const getSelectedMoviesOrShow = (state) =>
  state.movies.selectedMoviesOrShow;
export const getAllShows = (state) => state.movies.shows;
