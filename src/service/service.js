import axios from "axios";

export const getSearchMovies = (callback, title) => {
  const api_key = process.env.api_key;
  const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${title}`;

  // Return a promise from axios
  return axios
    .get(url)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};
