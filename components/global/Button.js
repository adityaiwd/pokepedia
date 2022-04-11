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
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    width: 100%;
    text-transform: uppercase;
    border: none;
`;

const Button = ({ children, variant, ...rest }) => {
  if (variant === "contained") {
    return <ContainedButton {...rest} data-testid="contained-button">{children}</ContainedButton>;
  } else {
    return <TextButton {...rest} data-testid="text-button">{children}</TextButton>;
  }
};

export default Button;
