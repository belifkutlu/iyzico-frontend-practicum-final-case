import styled from "styled-components";

import bgimg from "../../assests/starsss.png";
import RaitingStars from "../../components/Icons/RaitingStars";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
`;

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

export const StyledRaitingStars = styled(RaitingStars)`
  @media (max-width: 768px) {
  }
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

export const InfoWrapper = styled.div`
  display: flex;
  padding-left: 100px;
  width: 50%;

  @media (max-width: 768px) {
    padding-left: 0px;
    width: 100%;
    margin-top: 25px;
  }
`;

export const InfoTitle = styled.div`
  margin-bottom: 20px;
  margin-right: 15px;
  padding: 5px 20px;
  height: 30px;
  border-radius: 3px;
  font-family: "Niveau Grotesk";
  background-color: ${({ theme }) => theme.colors.yellow};
  @media (max-width: 768px) {
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 30px;
  }
`;
export const Info = styled.span`
  /* background-color: white;
  color: black; */
  text-align: center;
  white-space: pre;
`;

export const InfoValue = styled.div`
  height: 30px;
  padding: 5px 0;
  margin-bottom: 20px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const InfoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
