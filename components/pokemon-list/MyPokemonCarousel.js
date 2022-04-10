import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Carousel } from "react-responsive-carousel";
import PokemonCard from "../global/PokemonCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pokemonImage from "../../utils/pokemon-image";

const EmptyCarouselText = styled.div`
  font-size: 1.5rem;
  margin: 2rem auto;
  text-align: center;
`;

const indicatorStyles = {
  background: "#edf2f4",
  borderRadius: "50%",
  width: 8,
  height: 8,
  display: "inline-block",
  margin: "0 .8rem",
};

const InactiveIndicator = ({ onClickHandler, index, label }) => {
  return (
    <li
      style={indicatorStyles}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

const ActiveIndicator = ({ label, index }) => {
  const theme = useTheme();
  return (
    <li
      style={{
        ...indicatorStyles,
        background: theme.colors.primary,
      }}
      aria-label={`Selected: ${label} ${index + 1}`}
      title={`Selected: ${label} ${index + 1}`}
    />
  );
};

const MyPokemonCarousel = ({ myPokemons }) => {
  const emptyPokemons = myPokemons.length === 0;
  return (
    <div>
      {emptyPokemons? (
        <EmptyCarouselText>You have no pokémons yet</EmptyCarouselText>
      ) : (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return <ActiveIndicator label={label} index={index} />;
            }
            return (
              <InactiveIndicator
                onClickHandler={onClickHandler}
                index={index}
                label={label}
              />
            );
          }}
        >
          {myPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.pokeId}
              image={pokemonImage(pokemon.pokeId)}
              name={pokemon.name}
              nickname={pokemon.nickname}
              style={{ margin: "0 1rem 3rem" }}
              disabledLink
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MyPokemonCarousel;
