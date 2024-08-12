import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;

export const getSearchMovies = (title, setMovies) => {
  const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${title}`;
  axios
    .get(url)
    .then((res) => {
      setMovies(res.data.Search || []); // Update the movies state with the result or an empty array
    })
    .catch((err) => {
      console.log(err);
    });
};
