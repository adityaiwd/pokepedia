import { render, screen } from "@testing-library/react";
import PokemonCard from "../../../components/global/PokemonCard";

const mockCardProps = {
  id: 1,
  name: "test",
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  nickname: "test1",
};

describe("PokemonCard component", () => {
  describe("when it has a disabledLink prop", () => {
    it("should not render a link element", () => {
      render(
        <PokemonCard
          id={mockCardProps.id}
          name={mockCardProps.name}
          image={mockCardProps.image}
          nickname={mockCardProps.nickname}
          disabledLink
        />
      );

      expect(screen.queryByTestId("link-to-pokemon")).toBeNull()
    });
  });
  describe("when it has no disabledLink prop", () => {
    it("should render a link element", () => {
      render(
        <PokemonCard
          id={mockCardProps.id}
          name={mockCardProps.name}
          image={mockCardProps.image}
          nickname={mockCardProps.nickname}
        />
      );
      expect(screen.queryByTestId("link-to-pokemon")).toBeDefined()
    });
  });
  describe("when its nickname an empty string", () => {
    it("should render only its name", () => {
      render(
        <PokemonCard
          id={mockCardProps.id}
          name={mockCardProps.name}
          image={mockCardProps.image}
          nickname={''}
        />
      );
      expect(screen.queryByTestId("pokemon-name").textContent).toBe(mockCardProps.name)
    });
  });
});
