import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 7.2rem;
  width: auto;
  object-fit: contain;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode 
    ? "/logo.png" 
    : "/logo-black.png"

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" loading="lazy" />
    </StyledLogo>
  );
}

export default Logo;
