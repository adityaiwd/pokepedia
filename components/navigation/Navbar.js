import Image from "next/image";
import styled from "@emotion/styled";
import pokeBallImage from "../../public/pokeball-image.png";

const NavWrapper = styled.div`
  position: fixed;
  min-width: 100vw;
  background-color: #fff;
  opacity: 0.7;
  width: 100%;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  padding: 1.8rem 0;
  z-index: 10;
`;

const NavInnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;

const NavLogoText = styled.div`
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <NavInnerWrapper>
        <NavLogo>
          <Image src={pokeBallImage} alt="pokepedia" width={30} height={30} />
          <NavLogoText>Poképedia</NavLogoText>
        </NavLogo>
      </NavInnerWrapper>
    </NavWrapper>
  );
};

export default Navbar;
