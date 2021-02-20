const axios = require("axios");

const base_url_tmdb = "https://api.themoviedb.org/3";
const tmdb_api_key = "8481c2c17fe363052985ef179251a3a8";
const base_url_omdb = "https://www.omdbapi.com/";
const omdb_api_key = "65809f3e";

export const endpoint = {
  getFromTmdb: function (url) {
    return axios
      .get(`${base_url_tmdb}${url}`)
      .then((res) => res.data)
      .catch((err) => err.response);
  },
  getFromOmdb: function (url) {
    return axios
      .get(`${base_url_omdb}${url}`)
      .then((res) => res)
      .catch((err) => err.response);
  },
};

export const api = {
  fetchMovies: () =>
    endpoint.getFromTmdb(
      `/trending/movie/week?api_key=${tmdb_api_key}&language=en-US`
    ),
  fetchTvShows: () =>
    endpoint.getFromTmdb(
      `/trending/tv/week?api_key=${tmdb_api_key}&language=en-US`
    ),
  fetchNetflixOriginals: () =>
    endpoint.getFromTmdb(
      `/discover/tv?api_key=${tmdb_api_key}&with_network=123`
    ),

  fetchLatestTvShows: () =>
    endpoint.getFromTmdb(`/tv/popular/?api_key=${tmdb_api_key}&language=en-US`),
  fetchNowPlaying: () =>
    endpoint.getFromTmdb(
      `/movie/now_playing/?api_key=${tmdb_api_key}&language=en-US`
    ),
  fetchTrendingDay: () =>
    endpoint.getFromTmdb(
      `/trending/all/day?api_key=${tmdb_api_key}&language=en-US`
    ),
  fetchSingleInfo: (title, year) =>
    endpoint.getFromOmdb(
      `?t=${title}&y=${year}&plot=full&apikey=${omdb_api_key}`
    ),
  fetchThisYearMovies: () =>
    endpoint.getFromTmdb(
      `/discover/movie?api_key=${tmdb_api_key}&primary_release_year=2021`
    ),
  findById: (data) =>
    endpoint.getFromTmdb(`/find/${data}?api_key=${tmdb_api_key}`),
  fetchBySearch: (search) =>
    endpoint.getFromTmdb(
      `/search/movie?api_key=${tmdb_api_key}&query=${search}`
    ),
  fetchMovieByYear: (year) =>
    endpoint.getFromTmdb(
      `/discover/movie?api_key=${tmdb_api_key}&language=en-US&page=1&primary_release_year=${year}&sort_by=primary_release_date.desc`
    ),
  fetchTvByYear: (year) =>
    endpoint.getFromTmdb(
      `/discover/tv?api_key=${tmdb_api_key}&language=en-US&sort_by=first_air_date.desc&first_air_date_year=${year}`
    ),
};
