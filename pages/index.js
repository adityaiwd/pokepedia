import { useState, useEffect } from "react";
import client from "../graphql/client";
import { GET_POKEMONS } from "../graphql/queries";
import Head from "next/head";
import Link from "next/link";
import Button from "../components/global/Button";
import {
  Title,
  TitleWrapper,
  TwoColumnGrid,
} from "../components/global/Global";
import PokemonCard from "../components/global/PokemonCard";
import MyPokemonCarousel from "../components/pokemon-list/MyPokemonCarousel";
import { db } from "../utils/db";

export default function Home({ pokemonList }) {
  const [myPokemons, setMyPokemons] = useState([]);

  useEffect(() => {
    db.myPokemons.toArray().then((pokemons) => {
      setMyPokemons(pokemons.slice(0, 5));
    });
  })
  return (
    <div>
      <Head>
        <title>Poképedia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleWrapper>
        <Title>My Pokémons</Title>
        {myPokemons.length !== 0 && (
          <Link passHref href="/my-pokemons">
            <Button>View All</Button>
          </Link>
        )}
      </TitleWrapper>
      <MyPokemonCarousel myPokemons={myPokemons} />
      <TitleWrapper>
        <Title>Pokédex</Title>
      </TitleWrapper>
      <TwoColumnGrid>
        {pokemonList.map((pokemon, idx) => (
          <PokemonCard
            key={idx}
            id={idx + 1}
            image={pokemon.image}
            name={pokemon.name}
          />
        ))}
      </TwoColumnGrid>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: {
      limit: 20,
      offset: 0,
    },
  });

  return {
    props: {
      pokemonList: data.pokemons.results,
    },
  };
}
