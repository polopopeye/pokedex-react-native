import { apiDomain } from '../utils/constants';
import axios from 'axios';

export const getPokemonsApi = async () => {
  let pokemonList;
  await axios
    .get(apiDomain + '/pokemon?limit=5&offset=0')
    .then(function (response) {
      console.log('getPokemonsApi =====');
      console.log(response.data);

      pokemonList = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return pokemonList;
};

export const getPokemonDetailsByUrlApi = async (url) => {
  let pokemonDetails;
  await axios
    .get(url)
    .then(function (response) {
      console.log('getPokemonDetailsByUrlApi ===');
      console.log(response.data);
      pokemonDetails = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return pokemonDetails;
};
