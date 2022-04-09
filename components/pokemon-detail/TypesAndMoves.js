import { TwoColumnGrid } from "../global/Global";
import Types from "./Types";
import Moves from "./Moves";

const TypesAndMoves = ({ types, moves }) => {
  return (
    <div>
      <Types types={types}/>
      <Moves moves={moves} />
    </div>
  );
};

export default TypesAndMoves