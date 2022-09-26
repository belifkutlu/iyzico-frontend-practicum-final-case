import styled from "styled-components";

import introBg from "../../assests/images/introbg.jpg";
import StarwarsLogo from "../../components/StarwarsLogo";
import Volume from "../../components/Volume";

export const IntroWrapper = styled.div`
  background-image: url("${introBg}");
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
  animation: logo 15s linear forwards;
  @keyframes logo {
    0% {
      width: 200px;
      opacity: 1;
    }
    10% {
      width: 190px;
      opacity: 1;
    }
    20% {
      width: 180px;
    }
    90% {
      width: 10px;
      opacity: 1;
    }
    100% {
      width: 0;
      opacity: 0;
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
  color: white;
  position: absolute;
  top: 100%;
  animation: reel 40s linear 3s forwards;

  @keyframes reel {
    0% {
      top: 100%;
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      top: 70%;
      opacity: 0;
    }
  }
  p {
    font-size: 30px;
    color: #e5bf6f;
    text-transform: uppercase;
    text-align: justify;
    letter-spacing: 5;
  }
`;

export const IntroSubtitle = styled.p`
  font-size: 20px;
  margin: 0;
  margin-top: 10px;
  font-family: "Niveau Grotesk";
`;

export const SkipIntro = styled.div``;

export const IntroButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d6b055;
  background-color: transparent;
  padding: 10px;
  color: #e5bf6f;
  border-radius: 5px;
  font-size: 20px;
  margin: 0 auto;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 50px;
`;
