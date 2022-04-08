import { useTheme } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import PokemonCard from "./PokemonCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
  return (
    <div style={{ marginBottom: "-3rem" }}>
      <Carousel
        autoPlay
        infiniteLoop
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
        {myPokemons.length === 0 ? (
          <div>You have no pokemons yet</div>
        ) : (
          myPokemons.map((pokemon, idx) => (
            <PokemonCard
              key={idx}
              id={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              style={{ margin: "0 1rem 3rem" }}
            />
          ))
        )}
      </Carousel>
    </div>
  );
};

export default MyPokemonCarousel;
