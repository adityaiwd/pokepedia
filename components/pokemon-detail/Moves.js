import styled from "@emotion/styled";
import { Title } from "../global/Global";
import {FlexWrapper} from "./FlexWrapper";

const MoveChip = styled.div`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  background-color: #eee;
  color: #000;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Moves = ({moves}) => {
  return (
    <div>
      <Title style={{ fontSize: "1.6rem" }}>Moves</Title>
      <FlexWrapper>
        {moves.map((move) => (
          <MoveChip key={move}>{move}</MoveChip>
        ))}
      </FlexWrapper>
    </div>
  );
};

export default Moves;
