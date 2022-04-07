import Navbar from "./navigation/Navbar";
import styled from "@emotion/styled";

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  padding-top: 9rem;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 85%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  );
};

export default Layout;
