import { Title, TitleWrapper } from "../components/global/Global";
import PokemonCard from "../components/global/PokemonCard";
import { PokemonGrid } from "../components/global/PokemonGrid";

export default function MyPokemons() {
  return (
    <div>
      <TitleWrapper>
        <Title>My Pokémons</Title>
      </TitleWrapper>
      <PokemonGrid>
        <PokemonCard
          id="1"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          name="Bulbasaur"
        />
        <PokemonCard
          id="2"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
          name="Ivysaur"
        />
        <PokemonCard
          id="3"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          name="Venusaur"
        />
      </PokemonGrid>
    </div>
  );
}
