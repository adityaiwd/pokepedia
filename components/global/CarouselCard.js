import styled from "@emotion/styled";
import Image from "next/image";
import pokemonNumber from "../../utils/pokemon-number";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0 1rem;
  margin-bottom: 3rem;
  cursor: pointer;
`;

const CarouselCard = ({ image, name, id }) => {
  return (
    <Wrapper>
      <Image src={image} alt={name} width={100} height={100} />
      <h2>{name}</h2>
      <h3>{pokemonNumber(id)}</h3>
    </Wrapper>
  );
};

export default CarouselCard;
