import { useState } from "react";
import { GET_POKEMON_DETAIL } from "../../graphql/queries";
import client from "../../graphql/client";
import Image from "next/image";
import Head from "next/head";
import styled from "@emotion/styled";
import { Title, Subtitle } from "../../components/global/Global";
import pokemonNumber from "../../utils/pokemon-number";
import Button from "../../components/global/Button";
import Types from "../../components/pokemon-detail/Types";
import Moves from "../../components/pokemon-detail/Moves";
import capitalizeFirstLetter from "../../utils/capitalize-first-letter";

const BannerWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: -2rem;
`;

const InfoWrapper = styled.div`
  margin-left: 2rem;
`;

export default function PokemonDetail({ pokemon }) {
  const [toggleMoves, setToggleMoves] = useState(false);
  const showMoves = (toggle) => {
    return toggle ? pokemon.moves : pokemon.moves.slice(0,15)
  }
  return (
    <div>
      <Head>
        <title>Poképedia | {capitalizeFirstLetter(pokemon.name)}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerWrapper>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt="pokemon"
          height={150}
          width={150}
        />
        <InfoWrapper>
          <Subtitle style={{ marginBottom: ".5rem" }}>
            {pokemonNumber(pokemon.id.toString())}
          </Subtitle>
          <Title style={{ textTransform: "uppercase" }}>{pokemon.name}</Title>
          <Types types={pokemon.types}/>
        </InfoWrapper>
      </BannerWrapper>
      <Moves moves={showMoves(toggleMoves)} showAll={pokemon.moves.length > 15} onClickShowAll={() => setToggleMoves(!toggleMoves)} />
      <Button variant="contained" style={{ marginBottom: "3rem" }}>
        Catch
      </Button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await client.query({
    query: GET_POKEMON_DETAIL,
    variables: {
      name: context.params.id,
    },
  });
  return {
    props: {
      pokemon: {
        id: data.pokemon.id,
        name: data.pokemon.name,
        types: data.pokemon.types,
        moves: data.pokemon.moves,
      },
    },
  };
}
