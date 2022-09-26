import styled from "styled-components";

import bgimg from "../../assests/starsss.png";
import RaitingStars from "../../components/Icons/RaitingStars";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

export const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Content = styled.div`
  margin-top: 20px;
  border: 3px solid #d6b055;
  padding: 35px;
  margin-bottom: 50px;
  margin-top: 30px;
  background-image: url("${bgimg}");
  border-radius: 10px;
`;

export const StarhipModelWrp = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px 0 20px;
  margin: 0;
`;

export const ModelName = styled.p`
  margin: 0;
  color: white;
  font-size: 20px;
  font-family: "Niveau Grotesk";
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
  }
`;

export const RaitingStarsWrapper = styled.div`
  padding: 5px;
`;

export const StyledRaitingStars = styled(RaitingStars)``;

export const HipedriveRaiting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d6b055;
  border-radius: 5px;
  margin-left: 10px;
  width: 70px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  font-family: "Niveau Grotesk";
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
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
`;

export const StarshipImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

export const ShadowImage = styled.img`
  width: 100%;
`;

export const StarshipName = styled.h2`
  font-size: 60px;
  color: #ffc451;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding-left: 100px;
  width: 50%;
`;

export const InfoTitle = styled.div`
  margin-bottom: 20px;
  margin-right: 15px;
  padding: 5px 20px;
  height: 30px;
  border-radius: 3px;
  font-family: "Niveau Grotesk";
  background-color: rgba(255, 196, 81, 1);
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
`;

export const InfoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
