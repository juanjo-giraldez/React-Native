import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ac04664655c85bb090c1ded671186a40',
    language: 'es-ES',
  },
});

export default movieDB;
