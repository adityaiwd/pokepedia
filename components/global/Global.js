import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`;

export const Subtitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: #aaa;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 3rem;
  grid-template-columns: 1fr 1fr;
`;
