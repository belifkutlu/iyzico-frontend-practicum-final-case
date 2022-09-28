import styled from "styled-components";

import bgimg from "../../assests/starsss.png";

export const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  border: 3px solid ${({ theme }) => theme.colors.lightYellow};
  padding: 35px;
  margin-bottom: 50px;
  margin-top: 30px;
  background-image: url("${bgimg}");
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const StarhipModelWrp = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px 0 20px;
  margin: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ModelName = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: "Niveau Grotesk";
  @media (max-width: 768px) {
    margin: 10px auto;
    font-size: 18px;
    text-align: center;
    padding: 2px;
  }
`;

export const RaitingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};

  p {
    margin: 0;
    text-align: center;
    margin-top: 5px;
    font-family: "Niveau Grotesk";
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const RaitingStarsWrapper = styled.div`
  padding: 5px;
`;

export const HipedriveRaiting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.lightYellow};
  border-radius: 5px;
  margin-left: 10px;
  width: 70px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  font-family: "Niveau Grotesk";

  @media (max-width: 768px) {
    width: 40px;
    height: 30px;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    display: block;
    margin-top: 0px;
  }
`;

export const StarshipImagesGroup = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 50%;
  padding: 30px 30px 0px 30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 10px;
  }
`;

export const StarshipImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const ShadowImage = styled.img`
  width: 100%;
`;

export const StarshipName = styled.h2`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.yellow};
  padding: 0 10px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 10px;
    padding: 0;
  }
`;
