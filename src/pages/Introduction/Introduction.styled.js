import styled from "styled-components";

import Background from "../../assests/images/Background.jpg";
import StarwarsLogo from "../../components/StarwarsLogo";

export const IntroWrapper = styled.div`
  background-image: url("${Background}");
  user-select: none;
`;

export const IntroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const IntroSection = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLogo = styled(StarwarsLogo)`
  animation: logo 43s linear forwards;
  @keyframes logo {
    0% {
      width: 200px;
      opacity: 1;
    }

    50% {
      width: 0;
      opacity: 0;
    }
    90% {
      width: 0px;
      opacity: 0;
    }
    100% {
      width: 200px;
      opacity: 1;
    }
  }
`;

export const ContentWrapper = styled.div`
  height: 100em;
  width: 100%;
  transform: perspective(300px) rotateX(25deg);
  transform-origin: 50% 100%;
  bottom: 0;
  position: absolute;
  font-size: 250%;
`;

export const IntroContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 100%;
  animation: reel 40s linear 3s forwards;
  p {
    font-size: 45px;
    color: ${({ theme }) => theme.colors.yellow};
    text-transform: uppercase;
    text-align: justify;
    letter-spacing: 5;
  }
  @keyframes reel {
    0% {
      top: 100%;
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      top: 50%;
      opacity: 0;
    }
  }
`;

export const IntroSubtitle = styled.h3`
  font-size: 40px;
  margin: 0;
  margin-top: 10px;
  font-family: "Niveau Grotesk";
`;

export const IntroButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  color: ${({ theme }) => theme.colors.yellow};
  border-radius: 5px;
  font-size: 20px;
  margin: 0 auto;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 50px;
  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
    bottom: auto;
  }
`;
