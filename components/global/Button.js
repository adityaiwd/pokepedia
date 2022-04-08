import styled from "@emotion/styled";

const TextButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
`;

const ContainedButton = styled.button`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    font-size: 1.6rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
`;

const Button = ({ children, variant, ...rest }) => {
  if (variant === "contained") {
    return <ContainedButton {...rest}>{children}</ContainedButton>;
  } else {
    return <TextButton {...rest}>{children}</TextButton>;
  }
};

export default Button;
