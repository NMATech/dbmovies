import axios from "axios";

export const getSearchMovies = (title) => {
  const api_key = process.env.api_key;
  const url = `http://www.omdbapi.com/?apikey=${api_key}`;

  axios
    .get(`${url}}&s=${title}`)
    .then((callback, res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};
