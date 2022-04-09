import { TwoColumnGrid } from "../global/Global";
import Types from "./Types";
import Moves from "./Moves";

const TypesAndMoves = ({ types, moves }) => {
  return (
    <TwoColumnGrid>
      <Types types={types} />
      <Moves moves={moves} />
    </TwoColumnGrid>
  );
};

export default TypesAndMoves