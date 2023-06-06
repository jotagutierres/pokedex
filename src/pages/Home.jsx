import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard/Index'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import axios from 'axios'

export const Home = () => {
    const [pokemons, setPokemons] = useState ([])
useEffect (() => {
    getPokemon ()
}, [])

   const getPokemon = () =>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => setPokemons(res.data.results))
    .catch ((err) => console.log(err));
   }

  return (
    <div> 
        <Navbar/>
        <Container maxWidth="false">
            <Grid container>
                {pokemons.map ((pokemon, key) => (
            <Grid item xs={3} key={key}>
                <PokemonCard name={pokemon.name}/>
                </Grid>
                ))}
            </Grid>
        </Container>
    </div>
  )
}
