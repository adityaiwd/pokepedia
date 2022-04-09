import styled from "@emotion/styled";
import { Title } from "../global/Global";
import { FlexWrapper } from "./FlexWrapper";

const MoveChip = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #eee;
  color: #000;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ViewAllButton = styled.div`
  padding: 0.5rem;
  color: #000;
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: underline;
`;

const Moves = ({ moves, showAll, onClickShowAll }) => {
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <Title style={{ fontSize: "1.6rem" }}>Moves</Title>
      <FlexWrapper>
        {moves.map(({ move }) => (
          <MoveChip key={move.name}>{move.name}</MoveChip>
        ))}
        {showAll && <ViewAllButton onClick={onClickShowAll}>Show {moves.length > 15 ? 'Less' : 'All'}</ViewAllButton>}
      </FlexWrapper>
    </div>
  );
};

export default Moves;
