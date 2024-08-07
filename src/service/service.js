import axios from "axios";

export const getSearchMovies = (title) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=df33f91&t=${title}`)
    .then((callback, res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};