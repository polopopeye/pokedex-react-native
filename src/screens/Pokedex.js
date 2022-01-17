import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { getPokemonDetailsByUrlApi, getPokemonsApi } from '../api/pokemon';

const Pokedex = (props) => {
  const { navigation } = props;

  // const [pokemons, setpokemons] = useState([]);

  const loadPokemons = async () => {
    const response = await getPokemonsApi();

    const pokemonsArray = [];
    for await (const pokemon of response.results) {
      const pokemonsDetails = await getPokemonDetailsByUrlApi(pokemon.url);

      pokemonsArray.push(pokemonsDetails);
    }

    console.log('pokemonsArray');
    console.log(pokemonsArray);
    console.log('pokemonsArray');
  };

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  });

  return (
    <SafeAreaView>
      <Text>Pokedex SCREEN</Text>

      <Button title="IR A SETTINGS"></Button>
    </SafeAreaView>
  );
};

export default Pokedex;
