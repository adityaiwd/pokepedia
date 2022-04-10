import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import pokemonNumber from "../../utils/pokemon-number";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabledLink ? "none" : "auto")}; ;
`;

const PokemonCard = ({ id, image, name, nickname, disabledLink, ...rest }) => {
  return (
    <Link passHref href={`/pokemon/${name}`}>
      <Wrapper {...rest} disabledLink={disabledLink}>
        <Image src={image} alt={name} width={100} height={100} />
        <h2 style={{ textTransform: "uppercase" }}>
          {name}
          {nickname ? ` / ${nickname}` : ""}
        </h2>
        <h3>{pokemonNumber(id.toString())}</h3>
      </Wrapper>
    </Link>
  );
};

export default PokemonCard;
