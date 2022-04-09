import styled from "@emotion/styled";
import { FlexWrapper } from "./FlexWrapper";
import { Title } from "../global/Global";
import typeColor from "../../utils/type-color";

const TypeChip = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => typeColor(props.type)};
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Types = ({ types }) => {
  return (
    <FlexWrapper>
      {types.map(({ type }) => (
        <TypeChip key={type.name} type={type.name}>
          {type.name}
        </TypeChip>
      ))}
    </FlexWrapper>
  );
};

export default Types;
