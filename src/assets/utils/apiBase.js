import axios from "axios";

const apiKey = import.meta.env.OMDB_API_KEY;

export default axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=" + apiKey,
});
