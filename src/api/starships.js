import axios from 'axios';

export const searchStarship = async (query) => {
  return axios.get(`https://swapi.dev/api/starships/?search=${query}`);
};

export const getStarships = async () => {
  return axios.get(`https://swapi.dev/api/starships`);
};

export const loadMoreStarship = async (url) => {
  return axios.get(url);
};
